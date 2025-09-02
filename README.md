# React Hooks Demo Project

A comprehensive project demonstrating various React Hooks with practical, interactive examples. Built with React 19 and Vite for fast development and modern tooling.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-hooks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- **`npm run dev`** - Starts the Vite development server
- **`npm run build`** - Builds the app for production
- **`npm run lint`** - Runs ESLint to check code quality
- **`npm run preview`** - Previews the production build locally

## 🎣 Hook Demonstrations

### `useState` Hook
*Location: `src/useState-Hook/`*

The `useState` hook allows you to add state to functional components. It returns an array containing the current state value and a setter function.

- **`InteractiveCounter.jsx`** - A counter with increment, decrement, and reset functionality, demonstrating state updates with functional updates
- **`FavoriteColorPicker.jsx`** - Simple string state management example
- **`CarObjectUpdater.jsx`** - Demonstrates proper object state updates and immutability

### `useEffect` Hook
*Location: `src/useEffect-Hook/`*

The `useEffect` hook lets you perform side effects in functional components. It runs after render and can be controlled with dependency arrays.

- **`AutoIncrementCounter.jsx`** - Counter that increments on every render (no dependency array)
- **`OneTimeIncrementCounter.jsx`** - Counter that increments only once on mount (empty dependency array)
- **`ContinuousIncrementCounter.jsx`** - Counter that increments every 2 seconds using setTimeout with state dependency

### `useRef` Hook
*Location: `src/useRef-Hook/`*

The `useRef` hook returns a mutable ref object whose `.current` property persists across renders without causing re-renders.

- **`RenderCounter.jsx`** - Counts component renders without triggering re-renders
- **`DOMElementReference.jsx`** - Direct DOM element access and manipulation

### `useMemo` Hook
*Location: `src/useMemo-Hook/`*

The `useMemo` hook returns a memoized value, optimizing performance by avoiding expensive calculations on every render.

- **`CubeCalculator.jsx`** - Demonstrates memoization of expensive calculations (cubing numbers) with a separate counter that doesn't trigger recalculation

### `useCallback` Hook
*Location: `src/useCallback-Hook/`*

The `useCallback` hook returns a memoized callback function. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

- **`useCallbackComponent.jsx`** - Shows how to memoize a function to prevent a child component from re-rendering.

## 🏗️ Project Structure

```
react-hooks/
├── public/
├── src/
│   ├── assets/
│   ├── useState-Hook/
│   │   ├── InteractiveCounter.jsx
│   │   ├── FavoriteColorPicker.jsx
│   │   └── CarObjectUpdater.jsx
│   ├── useEffect-Hook/
│   │   ├── AutoIncrementCounter.jsx
│   │   ├── ContinuousIncrementCounter.jsx
│   │   └── OneTimeIncrementCounter.jsx
│   ├── useRef-Hook/
│   │   ├── RenderCounter.jsx
│   │   └── DOMElementReference.jsx
│   ├── useMemo-Hook/
│   │   └── CubeCalculator.jsx
│   ├── useCallback-Hook/
│   │   └── useCallbackComponent.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🧪 Running Examples

The main `App.jsx` file imports and displays different hook examples. By default, only the `UseCallbackComponent` component is active. To test other components:

1. Uncomment the desired imports in `App.jsx`
2. Add the component to the JSX return statement
3. Save the file to see the changes in your browser

## 🛠️ Technologies Used

- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **CSS3** - Styling

## 📚 Learning Objectives

This project helps you understand:

- When and how to use different React Hooks
- State management patterns with `useState`
- Side effect handling with `useEffect`
- Performance optimization with `useMemo`
- DOM manipulation and persistent values with `useRef`
- Best practices for functional components
- Modern React development workflow

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-hook-example`)
3. Commit your changes (`git commit -m 'Add new hook example'`)
4. Push to the branch (`git push origin feature/new-hook-example`)
5. Open a Pull Request
