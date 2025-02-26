import React , {Component} from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Routes/Home';
import About from './Routes/About';
import Services from './Routes/Services';
import Contact from './Routes/Contact';
import SignUp from './Routes/SignUp';


class App extends React.Component{
  render () {
    return (
      <BrowserRouter>
         <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/singup" element={<SignUp />}/>
        </Routes>

      </div>
      </BrowserRouter>
    )
  }
}

export default App;