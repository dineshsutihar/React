import './App.css'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from 'react'



function App() {

  const defaultQuote = 'Every creature is better alive than dead, men and moose and pine trees, and he who understands it aright will rather preserve its life than destroy it.'
  const defaultAuthor = 'Henry David Thoreau'
  const [quote, setQuote] = useState({ content: defaultQuote, author: defaultAuthor });



  const copyQuote = () => {
    const copyText = document.getElementById('cardContent')?.textContent;
    navigator.clipboard.writeText(copyText || '');
    alert('Quote Copied to Clipboard')
  }

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(setQuote)
      .catch((error) => {
        console.error('There has been a problem with your fetch operation: ', error);
        setQuote({ content: defaultQuote, author: defaultAuthor });
      });
  }


  useEffect(() => {
    fetchQuote();
  }, [])

  return (
    <>
      <Card id='card'>
        <CardHeader>
          <CardTitle id='cardtitle'>Random Quote</CardTitle>
          <CardDescription className='discription'><hr /></CardDescription>
        </CardHeader>
        <CardContent id='cardContent' className='italic'>
          <p>{quote.content}</p>
        </CardContent>
        <CardFooter id='footer'>
          <p>- {quote.author}</p>
        </CardFooter>
        <div>
          <Button onClick={copyQuote} className='m-2 hover:text-black hover:bg-white'>Copy Quote <svg className='ml-2 hover:text-black hover:bg-white' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M760-200H320q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h280l240 240v400q0 33-23.5 56.5T760-200ZM560-640v-200H320v560h440v-360H560ZM160-40q-33 0-56.5-23.5T80-120v-560h80v560h440v80H160Zm160-800v200-200 560-560Z" /></svg></Button>
          <Button onClick={fetchQuote} className='m-2 hover:text-black hover:bg-white'>Generate Quote <svg className='ml-2  hover:text-black hover:bg-white' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z" /></svg></Button>
        </div>
      </Card>
      <a className='author' href="https://www.github.com/dineshsutihar">Made by Dinesh Kumar Sutihar</a>
    </>
  )
}

export default App
