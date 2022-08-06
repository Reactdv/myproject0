
   import React from 'react'
   import './App.css'
   import { Nav,Brand } from "./components"
   import { Header, Gpt3, Features, Possibility } from "./pages"


    const App = () => {
     return (
       <div>
         <div>
            <Nav />
            <Header />
         </div>
            <Brand />
            <Gpt3 />
            <Features />
            <Possibility />
       </div>
      
     )
   }

   export default App
   