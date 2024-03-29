# React
React Learning

## Initial Setup
 run the following command to create a new react app
```bash
npx create-react-app my-app
```    
## Run the app and start the development server
```bash
cd my-app
npm run start 
```

## creating the buid 
```bash
npm run build
```

 As we have noticed the "npx create-react-app my-app" command takes a lot of time to create the app, so we can use the vite command to create the app faster 
Here is link to the vite documentation [Vite](https://vitejs.dev/guide/)

## Create a new react app using vite
```bash
npm init @vitejs/app
```
## Run the app and start the development server
```bash
cd my-app
npm run dev
```


<!-- Component -->
### Component : Best practice to create a component
```bash
import React from 'react';

const Component = () => {
    return (
        <div>
            <h1>Component</h1>
        </div>
    )
}

export default Component;
```

// Hooks and use of hooks in simple oneline: 
### Hooks

#### useState :- useState is a Hook that lets you add React state to function components.
```bash
import React, { useState } from 'react';

const Component = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Component</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Component;
```
#### useEffect :- The Effect Hook lets you perform side effects in function components like data fetching, subscriptions, or manually changing the DOM from React components. 
```bash
import React, { useState, useEffect } from 'react';

const Component = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <h1>Component</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Component;
```

#### useContext :- useContext is a hook that allows you to consume values from the Context API (the context object that is passed to React.createContext) without manually subscribing to it.
```bash

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Component = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Component</h1>
            <h2>{user.name}</h2>
        </div>
    )
}

export default Component;
```

#### useReducer :- useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
```bash

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

const Component = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Component</h1>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    )
}

export default Component;
```

#### useRef :- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
```bash

import React, { useRef } from 'react';

const Component = () => {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };
    return (
        <div>
            <h1>Component</h1>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    )
}

export default Component;
```

#### useMemo :- useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
```bash

import React, { useMemo } from 'react';

const Component = () => {
    const number = 10;
    const doubledNumber = useMemo(() => {
        return number * 2;
    }, [number]);
    return (
        <div>
            <h1>Component</h1>
            <h2>{doubledNumber}</h2>
        </div>
    )
}

export default Component;
```


#### useCallback :- useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
```bash

import React, { useState, useCallback } from 'react';

const Component = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return (
        <div>
            <h1>Component</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Component;
```

