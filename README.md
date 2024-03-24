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

