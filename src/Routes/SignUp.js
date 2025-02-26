import React , {Component} from 'react';
import Navbar  from '../Components/Navbar';
import Footer from '../Components/Footer';
import SignForm from '../Components/SignForm';

function SignUp () {
    return (
        <div>
            < Navbar/>
            <SignForm/>
            <Footer/>
        </div>
    )
}

export default SignUp;