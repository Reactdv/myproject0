
   import React from 'react'
   import './App.css'
   import { Nav,Brand } from "./components"
   import { Header } from "./pages"


    const App = () => {
     return (
       <div>
         <div>
            <Nav />
            <Header />
         </div>
            <Brand />
       </div>
      
     )
   }

   export default App
   