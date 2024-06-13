import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);


function App() {

  const puData  = () =>{
    // set(ref(db, "users/dinesh"),{
    //   id:1, 
    //   name: "Dinesh",
    //   age: 22
    // })
    set(ref(db, "users/akash"),{
      id:2, 
      name: "Akash",
      age: 22
    })
  }

  return (
    <>
    <div >
     <h1>Firebase React App</h1>
     <button onClick={puData}>Put Data</button>
     </div>
    </>
  )
}

export default App;
