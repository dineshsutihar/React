// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google'
// }


// const anotherElement = (
//     <div>
//         <a href='https://www.google.com' target='_blank'>Click me to visit Google</a>
//     </div>

// )


const anotherUser = "Umesh Sutihar"


const reactElement = React.createElement(
  'a', 
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  'Click me to visit Google | ',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
<>
  {reactElement}
   <App />
</>
)
