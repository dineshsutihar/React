
import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)

  // let myObj = {
  //   name: "Dinesh Sutihar",
  //   age:21
  // }

  // let newArr = [1,2,3,4,5,6,7,8,9,10 ]


  return (
    <>
      <h1 className='bg-white mb-4 text-black p-4 rounded-xl '>Tailwind Test</h1>
      <div className='flex gap-5 flex-wrap align-middle justify-center'>
      <Card username="Devinder" url={"https://th.bing.com/th/id/OIP.hLTThhxHPeGqFQVjpD1-hwHaE8?w=286&h=191&c=7&r=0&o=5&pid=1.7"}  />
      <Card username="Surender" url={"https://vignette.wikia.nocookie.net/althistory/images/7/74/Recent-portraits-random-people-in-random-places_11.jpg/revision/latest?cb=20141209232111"}/>
      </div>
      <Card />

    </>
  )
}

export default App
