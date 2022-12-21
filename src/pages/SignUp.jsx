import React, { useState } from 'react'
import './LogIn.css'
import { TextField, Button } from '@mui/material'
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'

const SignUp = () => {

  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPassword, setSignUpPassword] = useState("")
  
  const [user, setUser] = useState({})

  const signUp = async () => {
      await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed in z` 
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    }

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser){
        setUser(currentUser);
      }
    })

    return (
    <div>
    <form >
      <div className='signup-wrapper'>
        <h3 className='login-text'>Don't have an ARThub account?<br />SingUp now!</h3>
        
        <TextField  
              fullWidth
              id="name" 
              label="Nume" 
              name='name'
              type='name'
              variant="standard"
              size='small'
              margin="normal"
        />
        <TextField  
              fullWidth
              id="secondName" 
              label="Prenume" 
              name='secondName'
              type='secondName'
              variant="standard" 
              size='small'
              margin="normal"
        />
        <TextField  
              fullWidth
              id="email" 
              label="Adresa de email"
              name='email' 
              type='email'
              variant="standard"
              size='small'
              margin="normal"
              onChange={(event) => {setSignUpEmail(event.target.value)}}
        />
        <TextField 
              fullWidth
              type="password"
              id="password" 
              label="Parola" 
              name='password'
              variant="standard"
              size='small'
              margin="normal"
              onChange={(event) => {setSignUpPassword(event.target.value)}}

        />
        {/* <TextField 
              fullWidth
              type="confirmPassword"
              id="confirmPassword" 
              label="Confirma Parola" 
              name='confirmPassword'
              variant="standard"
              size='small'
              margin="normal"
              
    if (passwordRef.current.value !== confirmPasswordRef.current.value){
      return setError("Passwords do not match")
    }

        /> */}
         <div>
          Already have an account? <Link to="/LogIn">Login</Link> now.
        </div>
        <Button fullWidth onClick={signUp} id='submit-button' type='submit' variant="contained" >Continue</Button>
      </div> 
    </form>
    </div>
    );
};

export default SignUp;