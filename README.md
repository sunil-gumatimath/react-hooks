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

### `useLayoutEffect` Hook
*Location: `src/useLayoutEffect/`*

The `useLayoutEffect` hook is similar to `useEffect`, but it fires synchronously after all DOM mutations. This is useful when you need to read layout from the DOM and synchronously re-render.

- **`EffectTimingComparison.jsx`** - Demonstrates the execution timing difference between `useEffect` and `useLayoutEffect`:
  - `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints
  - `useEffect` runs asynchronously after the browser paints
  - Check the console to see the execution order: "Message from useLayoutEffect" appears before "Message from useEffect"

**Currently Active Example**: The `useLayoutEffect` hook is currently active, demonstrating the timing differences between `useEffect` and `useLayoutEffect` execution.

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

- **`useCallbackComponent.jsx`** - Shows how to memoize a function to prevent a child component from re-rendering

### `useReducer` Hook
*Location: `src/useReducer-Hook/`*

The `useReducer` hook is an alternative to `useState` for managing complex state logic. It follows the reducer pattern and is particularly useful when you have complex state updates or when the next state depends on the previous one.

- **`SimpleCounter.jsx`** - A comprehensive counter example demonstrating:
  - Increment and decrement actions
  - Reset functionality
  - Direct input value setting with number input
  - State management with reducer pattern
  - Action dispatching with different action types (`increase`, `decrease`, `input`, `zero`)

### `useContext` Hook
*Location: `src/useContext-Hook/`*

The `useContext` hook allows you to consume React Context without prop drilling. It provides a way to share data between components without having to explicitly pass props through every level.

- **`AppContext.js`** - Defines the context with `createContext()` for phone and name values
- **`AppContext.jsx`** - Context provider component that wraps the app and provides context values
- **`useContextComponent.jsx`** - Main component demonstrating context consumption
- **`Profile.jsx`** - Component that renders Contact component
- **`Contact.jsx`** - Uses `useContext` to display phone number from context
- **`Footer.jsx`** - Uses `useContext` to display both phone and name from context

Context values available:
- Phone: +91 1234567890
- Name: Ted

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
│   ├── useLayoutEffect/
│   │   └── EffectTimingComparison.jsx
│   ├── useRef-Hook/
│   │   ├── RenderCounter.jsx
│   │   └── DOMElementReference.jsx
│   ├── useMemo-Hook/
│   │   └── CubeCalculator.jsx
│   ├── useCallback-Hook/
│   │   └── useCallbackComponent.jsx
│   ├── useReducer-Hook/
│   │   └── SimpleCounter.jsx
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

The main `App.jsx` file imports and displays different hook examples. Currently, the `useLayoutEffect` hook example (`EffectTimingComparison`) is active, demonstrating:

- **Console Output Timing** - Check the browser console to see execution order
- **useLayoutEffect** - Logs "Message from useLayoutEffect" first (synchronous)
- **useEffect** - Logs "Message from useEffect" second (asynchronous)

To test other components:

1. Open `App.jsx`
2. Comment out the current `EffectTimingComparison` import and component
3. Uncomment the desired imports and components (e.g., `InteractiveCounter`, `SimpleCounter`, etc.)
4. Save the file to see the changes in your browser

### Example Component Switching:

```jsx
// Currently Active
import EffectTimingComparison from './useLayoutEffect/EffectTimingComparison'

// Available Examples (uncomment to use)
// import InteractiveCounter from './useState-Hook/InteractiveCounter'
// import SimpleCounter from './useReducer-Hook/SimpleCounter'
// import UseContextComponent from './useContext-Hook/useContextComponent'
// import CubeCalculator from './useMemo-Hook/CubeCalculator'
// ... and more
```

## 🛠️ Technologies Used

- **React 19.1.1** - Modern React with latest features
- **React DOM 19.1.1** - React DOM rendering
- **Vite 7.1.2** - Fast build tool and development server
- **ESLint 9.33.0** - Code linting and formatting with React-specific rules
- **CSS3** - Component styling

## 📚 Learning Objectives

This project helps you understand:

### Hook Fundamentals
- **`useState`** - State management in functional components
- **`useEffect`** - Side effects and component lifecycle
- **`useLayoutEffect`** - Synchronous effects and DOM measurements
- **`useRef`** - DOM manipulation and persistent values without re-renders

### Performance Optimization
- **`useMemo`** - Memoizing expensive calculations
- **`useCallback`** - Memoizing functions to prevent unnecessary re-renders

### Advanced State Management
- **`useReducer`** - Complex state logic with reducer pattern
- **`useContext`** - Global state sharing without prop drilling

### Development Best Practices
- Modern React development workflow with Vite
- Component composition and reusability
- Proper state management patterns
- Performance optimization techniques

## ⚡ Key Features

- **Interactive Examples** - All components include interactive elements to demonstrate hook behavior
- **Console Logging** - Many examples include console output for learning purposes
- **Modular Structure** - Each hook is organized in its own directory with focused examples
- **Modern React** - Built with React 19 and modern development practices
- **Hot Reloading** - Instant feedback during development with Vite
- **Comprehensive Coverage** - Includes all essential React hooks with practical examples

## 🔧 Recent Updates

- **Added `useLayoutEffect` hook demonstration** with timing comparison
- **Updated project structure** to reflect current organization
- **Fixed import path references** in documentation
- **Enhanced component descriptions** with more technical details
- **Added console logging examples** for better learning experience

## 🚀 Quick Start Guide

1. **Clone and Install**:
   ```bash
   git clone <repository-url>
   cd react-hooks
   npm install
   ```

2. **Start Development**:
   ```bash
   npm run dev
   ```

3. **Open Browser**: Navigate to `http://localhost:5173`

4. **Explore Examples**: 
   - Check the console for `useLayoutEffect` timing demonstration
   - Modify `App.jsx` to try different hook examples
   - Experiment with component interactions

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-hook-example`)
3. Commit your changes (`git commit -m 'Add new hook example'`)
4. Push to the branch (`git push origin feature/new-hook-example`)
5. Open a Pull Request

## 📖 Additional Resources

- [React Hooks Official Documentation](https://react.dev/reference/react)
- [useLayoutEffect vs useEffect](https://react.dev/reference/react/useLayoutEffect)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)
- [Context API Best Practices](https://react.dev/learn/passing-data-deeply-with-context)