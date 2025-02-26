import React , {Component} from 'react';
import './ContactForm.css';


function ContactForm () {
    return (
        <div className='form-container'>
         <h1>Send a message to us!<i class="fa-regular fa-face-grin-hearts"></i></h1>
         <form>
            <input type='text' required placeholder='Name'/>
            <input type='email' required placeholder='Email'/>
            <input type='text' required placeholder='Subject'/>
            <textarea placeholder='Message' rows="4"></textarea>
            <button>Send Message</button>
         </form>
        </div>
    )
}

export default ContactForm;