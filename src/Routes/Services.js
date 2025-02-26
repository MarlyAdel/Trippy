import React , {Component} from 'react';
import Navbar  from '../Components/Navbar';
import Hero from '../Components/Hero';
import Pic from '../Components/Images/Services.jpg'
import Footer from '../Components/Footer';
import Trip from '../Components/Trip';

function Services () {
    return (
        <div>
             < Navbar/>
        <Hero
         cName="hero-mid"
         heroImg={Pic}
         title="Services"
       />  
       <Trip/>
       <Footer/>
        </div>
    )
}
export default Services;