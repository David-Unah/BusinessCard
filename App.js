import React from 'react'
import ReactDom from 'react-dom'
import Info from './components/Info'
import Interest from './components/Interests'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
    return (
         <div className= "app">
            <Info />
            <About />
            <Interest />
            <Footer />
         </div>
    )
}

export default App