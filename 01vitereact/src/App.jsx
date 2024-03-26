import Chai from "./Chai"

function App() {
 const username = "Dinesh Sutihar"


  return (
    // This is a fragment
    <> 
    <Chai />
    {/* This is a JSX expression we cannot user any other codes like if for inside the {} */}
    <h1>Hello form vite basic | {username}</h1>  
    </>
  )
}

export default App
