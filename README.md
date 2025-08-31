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

-   **InteractiveCounter**: A counter with increment, decrement, and reset functionality.
-   **FavoriteColorPicker**: A simple example of managing string state.
-   **CarObjectUpdater**: Demonstrates how to properly update object state.

### `useEffect`

-   **AutoIncrementCounter**: A counter that increments on every render, showing `useEffect` without a dependency array.
-   **OneTimeIncrementCounter**: A counter that increments only once on component mount, using an empty dependency array.
-   **ContinuousIncrementCounter**: A counter that increments every 2 seconds, showing `useEffect` with a state dependency.

### `useRef`

-   **RenderCounter**: Shows how to use `useRef` to count component renders without causing re-renders.
-   **DOMElementReference**: Demonstrates accessing and manipulating DOM elements with `useRef`.

## Technologies Used

-   React
-   Vite
-   ESLint