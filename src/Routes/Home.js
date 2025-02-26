import React , {Component} from 'react';
import Navbar  from '../Components/Navbar';
import Hero from '../Components/Hero';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';

function Home () {
    return (
        <div>
       <Navbar/>
       <Hero
         cName="hero"
         heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&W=870&q=8"
         title="Your Journey Your Story"
         text="Choose Your Favourite Destination"
         bottonText="Travel Plan"
         url="/"
         btnClass="show"
       />
       <Destination/>
       <Trip/>
       <Footer/>
        </div>
    )
}
export default Home;