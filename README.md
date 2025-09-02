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

### `useContext` Hook
*Location: `src/useContext-Hook/`*

The `useContext` hook allows you to consume React Context without prop drilling. It provides a way to share data between components without having to explicitly pass props through every level.

- **`AppContext.js`** - Defines the context with `createContext()` for phone and name values
- **`AppContext.jsx`** - Context provider component that wraps the app and provides context values
- **`useContextComponent.jsx`** - Main component demonstrating context consumption
- **`Profile.jsx`** - Component that renders Contact component
- **`Contact.jsx`** - Uses `useContext` to display phone number from context
- **`Footer.jsx`** - Uses `useContext` to display both phone and name from context

**Current Active Example**: The `useContext` hook is currently active and demonstrates:
- Phone: +91 1234567890
- Name: Ted
- How context values flow through the component tree

## 🏗️ Project Structure

```
react-hooks/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Profile.jsx
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
│   ├── useContext-Hook/
│   │   ├── AppContext.js
│   │   ├── AppContext.jsx
│   │   └── useContextComponent.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🧪 Running Examples

The main `App.jsx` file imports and displays different hook examples. Currently, the `useContext` hook example is active, showing:

- **Profile Component** - Contains Contact component
- **Contact Component** - Displays phone number from context
- **Footer Component** - Displays both phone and name from context

To test other components:

1. Comment out the current `UseContextComponent` import in `App.jsx`
2. Uncomment the desired imports (e.g., `useState`, `useEffect`, etc.)
3. Add the component to the JSX return statement
4. Save the file to see the changes in your browser

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
- Function memoization with `useCallback`
- **Context API and `useContext` for state sharing without prop drilling**
- Best practices for functional components
- Modern React development workflow

## 🔧 Recent Fixes

- **Fixed circular import issues** in context components
- **Resolved module resolution conflicts** between `.js` and `.jsx` files
- **Corrected context destructuring** in consumer components
- **Added proper error boundaries** with StrictMode wrapper

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-hook-example`)
3. Commit your changes (`git commit -m 'Add new hook example'`)
4. Push to the branch (`git push origin feature/new-hook-example`)
5. Open a Pull Request
