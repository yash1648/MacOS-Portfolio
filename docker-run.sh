#!/usr/bin/env bash

set -euo pipefail

SCRIPT_NAME=$(basename "$0")

MODE="prod"            # dev|prod
TAG="macos-portfolio:latest"
NAME="macos-portfolio"
PORT="8080"            # host port
RESTART="unless-stopped"
CPUS="1.0"
MEMORY="512m"
PIDS_LIMIT="256"
NOFILE_ULIMIT="4096"
ENV_FILE=""
ENV_VARS=()
VOLUMES=()

log() { printf "[%s] %s\n" "$SCRIPT_NAME" "$*"; }
err() { printf "[%s][ERROR] %s\n" "$SCRIPT_NAME" "$*" 1>&2; }

usage() {
  cat <<EOF
Usage: $SCRIPT_NAME [options]

Options:
  --mode <dev|prod>         Set run mode (default: prod)
  --tag <image:tag>         Docker image tag (default: macos-portfolio:latest)
  --name <container-name>   Container name (default: macos-portfolio)
  --port <host-port>        Host port to map (default: 8080 prod, 5173 dev)
  --env KEY=VALUE           Environment variable (repeatable)
  --env-file <path>         Path to env file to load
  --volume host:container   Volume mount (repeatable)
  --cpus <n>                CPU limit (default: 1.0)
  --memory <size>           Memory limit (default: 512m)
  --restart <policy>        Restart policy (default: unless-stopped)
  --help                    Show this help and exit

Examples:
  $SCRIPT_NAME --mode prod --tag macos-portfolio:latest --port 8080
  $SCRIPT_NAME --mode dev  --tag macos-portfolio:dev     --port 5173 --volume $(pwd):/app
EOF
}

require_docker() {
  if ! command -v docker >/dev/null 2>&1; then
    err "Docker is not installed or not in PATH"
    exit 127
  fi
}

parse_args() {
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --mode) MODE="$2"; shift 2 ;;
      --tag) TAG="$2"; shift 2 ;;
      --name) NAME="$2"; shift 2 ;;
      --port) PORT="$2"; shift 2 ;;
      --env) ENV_VARS+=("$2"); shift 2 ;;
      --env-file) ENV_FILE="$2"; shift 2 ;;
      --volume) VOLUMES+=("$2"); shift 2 ;;
      --cpus) CPUS="$2"; shift 2 ;;
      --memory) MEMORY="$2"; shift 2 ;;
      --restart) RESTART="$2"; shift 2 ;;
      --help) usage; exit 0 ;;
      *) err "Unknown option: $1"; usage; exit 2 ;;
    esac
  done

  case "$MODE" in
    dev) PORT=${PORT:-5173} ;;
    prod) PORT=${PORT:-8080} ;;
    *) err "Invalid mode: $MODE"; exit 2 ;;
  esac
}

build_image() {
  local target
  if [[ "$MODE" == "dev" ]]; then
    target="dev"
  else
    target="runner"
  fi
  log "Building image '$TAG' (target: $target)"
  docker build --target "$target" -t "$TAG" .
}

run_container() {
  local container_port
  local extra_envs=()
  local extra_vols=()

  if [[ "$MODE" == "dev" ]]; then
    container_port=5173
  else
    container_port=8080
  fi

  if [[ -n "$ENV_FILE" ]]; then
    extra_envs+=("--env-file" "$ENV_FILE")
  fi
  for kv in "${ENV_VARS[@]}"; do
    extra_envs+=("-e" "$kv")
  done
  for vol in "${VOLUMES[@]}"; do
    extra_vols+=("-v" "$vol")
  done

  if docker ps -a --format '{{.Names}}' | grep -q "^${NAME}$"; then
    log "Container '$NAME' exists, removing"
    docker rm -f "$NAME" >/dev/null 2>&1 || true
  fi

  log "Starting container '$NAME' from '$TAG'"
  docker run -d \
    --name "$NAME" \
    -p "$PORT:$container_port" \
    --restart "$RESTART" \
    --cpus "$CPUS" \
    --memory "$MEMORY" \
    --pids-limit "$PIDS_LIMIT" \
    --ulimit nofile=$NOFILE_ULIMIT:$NOFILE_ULIMIT \
    --log-driver json-file \
    --log-opt max-size=10m \
    --log-opt max-file=3 \
    "${extra_envs[@]}" \
    "${extra_vols[@]}" \
    "$TAG"

  log "Container '$NAME' started. Logs: docker logs -f $NAME"
}

main() {
  parse_args "$@"
  require_docker
  build_image
  run_container
}

main "$@"

