import React, {useState} from 'react'
import {TextField, Button} from '@mui/material'
import { useNavigate } from "react-router-dom";
import { Auth } from '../../global/Auth';
import { auth } from '../../firebase';
import {LogInBox, LogInContainer} from "../../components/utils/UtilComponents";

const LogIn = () => {

    const [logInEmail, setLogInEmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");

    const { user, signIn } = Auth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(auth.currentUser)
            await signIn(logInEmail, logInPassword);
            navigate('/contulMeu')
        } catch (e) {
            console.log(e.message)
            if (e.code === 'auth/user-not-found' || e.code ==='auth/invalid-email'){
                document.querySelector('.error').innerHTML = "Invalid email address!";
            }
            if (e.code === 'auth/wrong-password'){
                document.querySelector('.error').innerHTML = "Wrong password!";
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <LogInContainer>
            <LogInBox>
                    {auth.currentUser ? "Esti logat ca: " + `${user.email}` : <div>
                    <h1>Log In</h1>
                        <TextField
                            fullWidth
                            id="email"
                            label="email"
                            variant="standard"
                            size='small'
                            name='email'
                            type='email'
                            onChange={(event) => {
                                setLogInEmail(event.target.value)
                            }}
                        />
                        <TextField
                            fullWidth
                            type="password"
                            id="password"
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
                        type="submit"
                        style={{backgroundColor: "white", borderRadius: "20px", color: "black", fontSize: "medium", fontWeight: "bold"}}
                    >
                        Log In
                    </Button>
                </div>}
            </LogInBox>
            </LogInContainer>
            </form>
        </div>
    );
};

export default LogIn;