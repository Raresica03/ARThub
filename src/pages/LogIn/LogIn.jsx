import React, {useState} from 'react'
import {TextField, Button} from '@mui/material'
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {auth} from '../../firebase'
import {LogInBox, LogInContainer} from "../../components/utils/UtilComponents";

const LogIn = () => {

    const [logInEmail, setLogInEmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");

    const [user, setUser] = useState({})

    const login = async () => {
        await signInWithEmailAndPassword(auth, logInEmail, logInPassword)
            .then((userCredential) => {
                // Signed in
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
            <LogInContainer>
                <LogInBox>
                    <h1>Log In</h1>
                    <TextField
                        fullWidth
                        id="textfield"
                        label="Email"
                        variant="standard"
                        size='small'
                        name='email'
                        type='email'
                        onChange={(event) => {
                            setLogInEmail(event.target.value)
                        }}

                    />
                    {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}

                    <TextField
                        fullWidth
                        type="password"
                        id="textfield"
                        label="Parola"
                        variant="standard"
                        size='small'
                        onChange={(event) => {
                            setLogInPassword(event.target.value)
                        }}

                    />
                    <p>
                        <a style={{textDecoration: "none", fontSize: "20px"}} href='../SignUp'>Don't have an account?</a>
                    </p>
                    <Button
                        id='submit-button'
                        fullWidth
                        variant="contained"
                        onClick={login}
                        style={{backgroundColor: "white", borderRadius: "20px", color: "black", fontSize: "medium", fontWeight: "bold"}}
                    >
                        Log In
                    </Button>
                </LogInBox>
            </LogInContainer>
        </div>
    );
};

export default LogIn;