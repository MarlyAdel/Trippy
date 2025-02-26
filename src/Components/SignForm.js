import React , {Component} from 'react';
import './SignForm.css';
import Photo from '../Components/Images/form.png'

function SignForm () {
    return (
        <div className='sign-content'>
          <div className='container'>
            <div className='row'>
                <div className='col-6-md'>
                    <img src={Photo}/>
                </div>
            </div>

            <div className='row'>
                <div className='col-6-md'>
                    <form>
                     <i class="fa-solid fa-plane"></i>
                    <h2>Welcome on Board</h2>
                    <p>Enter the information you entered while registering</p>
                        <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remeber Me</label>
    <a href='/'>Forget Password?</a>
  </div>
  <button type="submit">Sign Up</button>
    <p>Or</p>
  <div className='bottom'>
    <a href='https://www.google.com/'><i class="fa-brands fa-google"></i>Sign with Google</a>  
  </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
    )
}

export default SignForm;