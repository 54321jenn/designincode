# Design in Code

A learning platform that teaches designers how to build applications without all the technical jargon. Learn the minimum effective code, tooling, and workflows to build, iterate, and deliver coded designs with confidence.

## About

Design in Code is a flight school for designers. Instead of becoming engineers, you'll learn just enough code to ship your work. The platform provides short "recipes" you can return to when you need them—no quizzes, just hands-on learning.

### Key Features

- **Get Started**: Set up your editor, AI assistant, Git, and learn the command line
- **Build with React**: Create beautiful web applications with React, from setup to deployment
- **Build with Python**: Create interactive applications and data tools with Python
- **Deep Dive**: Explore advanced topics like MPC servers and more

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **React Router** - Navigation
- **Emotion** - CSS-in-JS styling

## Getting Started

### Prerequisites

- Node.js 18+ (or 20+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/54321jenn/designincode.git
cd designincode
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components (Layout, etc.)
├── pages/           # Page components
│   ├── getting-started/  # Get Started section pages
│   └── tutorials/        # Tutorial pages
└── App.tsx          # Main app component with routes
```

## Development

### Linting

```bash
npm run lint
```

## Contributing

This is a learning platform project. Contributions, suggestions, and feedback are welcome!

## License

Copyright © 2025 MajorX.ai LLC

Built in Texas ✦ deployed everywhere
