# Contributing to macOS Portfolio

Thank you for considering contributing to `macos-portfolio`!

## Code of Conduct

Please review `CODE-OF-CONDUCT.md` before participating.

## Getting Started

1. Fork the repository.
2. Clone your fork:
   ```bash
   git clone https://github.com/yash1648/macos-portfolio.git
   ```
3. Create a feature branch:
   ```bash
   git checkout -b feat/short-description
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

## Development Workflow

- Run locally:
  ```bash
  npm run dev
  ```
- Lint changes:
  ```bash
  npm run lint
  ```
- Build:
  ```bash
  npm run build
  ```

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```
feat: add new window animation
fix: correct z-index management in Window store
docs: improve setup instructions
```

## Pull Requests

1. Open a PR against `main`.
2. Provide a clear title and description. Link related issues (e.g., `Closes #123`).
3. Ensure the PR is scoped and includes only relevant changes.

## Reporting Issues

- Use the GitHub Issues page with a clear description, steps to reproduce, and environment details.

## Release & Deployment

- Production builds are containerized. See Docker instructions in `README.md`.

Thanks for your contribution!

