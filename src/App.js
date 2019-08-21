import React from "react"

import Header from "./components/Header"
import Aside from "./components/Aside"
import Form from "./components/Form"
import Footer from "./components/Footer"

function App(){
return(
<div>
    <Header/>

    <div className="main">
    <Aside/>
    <Form/>
    </div>
  
  <Footer/>
    </div>
)
}

export default App