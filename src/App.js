
   import React from 'react'
   import './App.css'
   import { Nav,Brand } from "./components"
   import { Header, Gpt3 } from "./pages"


    const App = () => {
     return (
       <div>
         <div>
            <Nav />
            <Header />
         </div>
            <Brand />
            <Gpt3 />
       </div>
      
     )
   }

   export default App
   