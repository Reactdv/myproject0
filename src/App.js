
   import React from 'react'
   import './App.css'
   import { Nav,Brand,CTA } from "./components"
   import { Header, Gpt3, Features, Possibility,Blog, Footer } from "./pages"


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
            <CTA />
            <Blog />
            <Footer />
       </div>
      
     )
   }

   export default App
   