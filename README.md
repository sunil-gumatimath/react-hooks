# React Hooks Demo Project

A comprehensive demonstration project showcasing various React Hooks implementations. This project provides practical examples of `useState` and `useEffect` hooks with clear, descriptive component names that illustrate different use cases and patterns.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

The development server will start on `http://localhost:5173` (or similar port).

## 📁 Project Structure

```
src/
├── useState-demos/          # useState hook examples
│   ├── InteractiveCounter.jsx     # Counter with increment/decrement/reset
│   ├── FavoriteColorPicker.jsx    # Simple color state management
│   └── CarObjectUpdater.jsx       # Object state with spread operator
├── useEffect-demos/         # useEffect hook examples
│   ├── AutoIncrementCounter.jsx   # Effect runs on every render
│   └── OneTimeIncrementCounter.jsx # Effect runs once on mount
├── App.jsx                  # Main application component
└── main.jsx                 # Application entry point
```

## 🎯 Hook Demonstrations

### useState Examples

#### 1. **InteractiveCounter** (`useState-demos/InteractiveCounter.jsx`)
- **Purpose**: Demonstrates basic state management with multiple operations
- **Features**: 
  - Increment counter
  - Decrement counter  
  - Reset to zero
- **Concepts**: State updates with functional updates, multiple event handlers

#### 2. **FavoriteColorPicker** (`useState-demos/FavoriteColorPicker.jsx`)
- **Purpose**: Shows simple string state management
- **Features**: Toggle between different color preferences
- **Concepts**: Basic state updates, string state management

#### 3. **CarObjectUpdater** (`useState-demos/CarObjectUpdater.jsx`)
- **Purpose**: Illustrates object state management
- **Features**: Update car color while preserving other properties
- **Concepts**: Object state updates using spread operator, immutable state updates

### useEffect Examples

#### 1. **AutoIncrementCounter** (`useEffect-demos/AutoIncrementCounter.jsx`)
- **Purpose**: Demonstrates useEffect without dependencies
- **Behavior**: Counter auto-increments every 2 seconds continuously
- **Concepts**: Effect runs on every render, potential infinite loops, side effects

#### 2. **OneTimeIncrementCounter** (`useEffect-demos/OneTimeIncrementCounter.jsx`)
- **Purpose**: Shows useEffect with empty dependency array
- **Behavior**: Counter increments once after initial component mount
- **Concepts**: Effect runs only once, component lifecycle, dependency arrays

## 🛠 Technologies Used

- **React** `^19.1.1` - UI library
- **React DOM** `^19.1.1` - DOM rendering
- **Vite** `^7.1.2` - Build tool and development server
- **ESLint** `^9.33.0` - Code linting and quality
- **@vitejs/plugin-react** - Vite React plugin

## 📚 Learning Objectives

This project helps understand:

- **useState Hook**:
  - Basic state management
  - State updates with functional approach
  - Object state management
  - Immutable state updates

- **useEffect Hook**:
  - Effect lifecycle
  - Dependency arrays
  - Side effect management
  - Component mount/unmount behavior

- **React Patterns**:
  - Component composition
  - Event handling
  - Functional components
  - Modern React practices

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build in `dist/` folder |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

## 🎓 Usage Tips

1. **Exploring useState**: Start with `InteractiveCounter` to understand basic state management
2. **Understanding useEffect**: Compare `AutoIncrementCounter` and `OneTimeIncrementCounter` to see the difference between effects with and without dependencies
3. **Object State**: Study `CarObjectUpdater` to learn proper object state management patterns

## 🤝 Contributing

Feel free to add more hook examples or improve existing ones! Some ideas:
- Custom hooks examples
- useContext demonstrations
- useReducer patterns
- useMemo and useCallback optimizations

## 📝 License

This project is created for educational purposes. Feel free to use and modify as needed.