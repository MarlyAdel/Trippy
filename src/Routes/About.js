import React , {Component} from 'react';
import Navbar  from '../Components/Navbar';
import Hero from '../Components/Hero';
import Pic from '../Components/Images/About.jpeg'
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';

function About () {
    return (
        <>
         < Navbar/>
        <Hero
         cName="hero-mid"
         heroImg={Pic}
         title="About"
       /> 
       <AboutUs/>
       <Footer/> 
        </>
    )
}
export default About;