# React Hooks Demo Project

A project demonstrating various React Hooks with practical examples.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

## Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Lints the code.
-   `npm run preview`: Previews the production build.

## Hook Demonstrations

### `useState`

The `useState` hook lets you add state to functional components. It returns an array with two elements: the current state and a function to update it.

-   **InteractiveCounter**: A counter with increment, decrement, and reset functionality.
-   **FavoriteColorPicker**: A simple example of managing string state.
-   **CarObjectUpdater**: Demonstrates how to properly update object state.

### `useEffect`

The `useEffect` hook lets you perform side effects in functional components. It runs after every render by default, but you can control its execution with a dependency array.

-   **AutoIncrementCounter**: A counter that increments on every render, showing `useEffect` without a dependency array.
-   **OneTimeIncrementCounter**: A counter that increments only once on component mount, using an empty dependency array.
-   **ContinuousIncrementCounter**: A counter that increments every 2 seconds, showing `useEffect` with a state dependency.

### `useRef`

The `useRef` hook returns a mutable ref object whose `.current` property is initialized to the passed argument. It's useful for holding a value that doesn't cause a re-render when it changes, or for accessing DOM elements.

-   **RenderCounter**: Shows how to use `useRef` to count component renders without causing re-renders.
-   **DOMElementReference**: Demonstrates accessing and manipulating DOM elements with `useRef`.

### `useMemo`

The `useMemo` hook returns a memoized value. It's useful for performance optimizations by avoiding expensive calculations on every render.

-   **CubeCalculator**: A component that demonstrates how to use `useMemo` to memoize the result of an expensive calculation (cubing a number).

## Technologies Used

-   React
-   Vite
-   ESLint
