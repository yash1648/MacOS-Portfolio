<div align="center">
  <img src="./public/macbook.png" alt="logo" width="150" height="auto" />
  <h1>macOS Portfolio</h1>
  <p>
    A macOS-inspired portfolio built with React and Vite. Experience a unique way to browse my projects and skills through a simulated desktop environment.
  </p>
  
  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/github/license/yash1648/macos-portfolio?style=for-the-badge" alt="license" />
    <img src="https://img.shields.io/github/stars/yash1648/macos-portfolio?style=for-the-badge" alt="stars" />
    <img src="https://img.shields.io/github/forks/yash1648/macos-portfolio?style=for-the-badge" alt="forks" />
    <img src="https://img.shields.io/github/issues/yash1648/macos-portfolio?style=for-the-badge" alt="issues" />
  </p>

  <p>
    <a href="https://yashbagalportfolio.vercel.app/"><strong>View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/yash1648/macos-portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/yash1648/macos-portfolio/issues">Request Feature</a>
  </p>
</div>

<br />

## 🚀 About The Project



This project is a creative portfolio designed to look and feel like the macOS desktop. It's built with modern web technologies and showcases my work in an interactive and engaging way. You can open applications, drag windows, and explore projects as if you were using a real computer.

### ✨ Features

- **macOS-style UI**: Authentic-looking Dock, Navbar, and Windows.
- **Interactive Desktop**: Draggable and resizable windows for a realistic experience.
- **Simulated Applications**: Finder, Terminal, Safari, Photo Gallery, Text Editor, and more.
- **Dynamic Content**: Easily updatable portfolio items.
- **Responsive Design**: Looks great on different screen sizes.
- **Dockerized Build**: Production-ready container using Nginx with health checks.

### 🛠️ Built With

This project was built using the following technologies:

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [Zustand](https://github.com/pmndrs/zustand)
*   [Framer Motion](https://www.framer.com/motion/)

## � Documentation

- Project configuration guide: `docs/CONFIGURATION.md`
- Troubleshooting common issues: `docs/TROUBLESHOOTING.md`
- API references: `docs/API.md` (no external API; app is static)

## �📦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have:

- Node.js v18+ and npm
- Git
- Docker (optional, for containerized runs)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/yash1648/macos-portfolio.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm run dev
    ```
The application will be available at `http://localhost:5173`.

### Production Build

```sh
npm run build
npm run preview
```

### Docker (Recommended for Production)

- Build and run using the helper script:

```sh
./docker-run.sh --mode prod --tag macos-portfolio:latest --port 8080
```

- Development mode (hot reload via Vite inside container):

```sh
./docker-run.sh --mode dev --tag macos-portfolio:dev --port 5173
```

See Docker details below and in `docs/TROUBLESHOOTING.md`.

## 📜 Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run preview`: Previews the production build locally.
-   `npm run lint`: Lints the project.

## ⚙️ Configuration

- Portfolio content and UI are driven by constants in `src/constants/index.js`.
- Update links, projects, tech stack, and gallery items in that file.
- Vite dev server is configured in `vite.config.js` to bind to all interfaces.
- Detailed guidance: `docs/CONFIGURATION.md`.

## 🩺 Troubleshooting

- PDF viewer requires `public/files/resume.pdf` to exist.
- If the dev server is not reachable, ensure ports `5173` or chosen port are open.
- Check Node.js version (use v18+). See `docs/TROUBLESHOOTING.md` for more.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📄 License

Distributed under the MIT License. See `LICENSE.md` for more information.

## 📬 Contact

Yash - [@yash1648](mailto:yashbagal623@gmail.com) - [yashbagal623@gmail.com]

Project Link: [https://github.com/yash1648/macos-portfolio](https://github.com/yash1648/macos-portfolio)
