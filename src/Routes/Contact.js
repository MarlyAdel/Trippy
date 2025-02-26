import React , {Component} from 'react';
import Navbar  from '../Components/Navbar';
import Hero from '../Components/Hero';
import Pic from '../Components/Images/contact.jpg'
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

function Contact () {
    return (
        <>
         < Navbar/>
        <Hero
         cName="hero-mid"
         heroImg={Pic}
         title="Contact"
       />  
       <ContactForm/>
       <Footer/>
        </>
    )
}
export default Contact;