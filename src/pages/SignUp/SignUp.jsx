import React, {useState} from 'react'
import {TextField, Button} from '@mui/material'
import {Link} from "react-router-dom";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from '../../firebase'
import {SignUpBox, SignUpContainer} from "../../components/utils/UtilComponents";

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
        if (currentUser) {
            setUser(currentUser);
        }
    })

    return (
        <div>
            <SignUpContainer>
                <SignUpBox>
                    <h2>Don't have an ARThub account?<br/>SingUp now!</h2>

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
                        onChange={(event) => {
                            setSignUpEmail(event.target.value)
                        }}
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
                        onChange={(event) => {
                            setSignUpPassword(event.target.value)
                        }}

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
                    <div style={{fontSize: "20px"}}>
                        Already have an account? <Link style={{textDecoration: "none", fontSize: "20px"}} to="/LogIn">Login</Link> now.
                    </div>
                    <Button
                        fullWidth
                        onClick={signUp}
                        id='submit-button'
                        type='submit'
                        variant="contained"
                        style={{backgroundColor: "white", borderRadius: "20px", color: "black", fontSize: "medium", fontWeight: "bold"}}
                    >
                        Continue
                    </Button>
                </SignUpBox>
            </SignUpContainer>
        </div>
    );
};

export default SignUp;