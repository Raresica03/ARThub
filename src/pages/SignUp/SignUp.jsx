import React, {useState} from 'react'
import {TextField, Button} from '@mui/material'
import * as yup from 'yup';
import { useFormik } from "formik";
import {Link, useNavigate} from "react-router-dom";
import {auth} from '../../firebase'
import { Auth } from '../../global/Auth';
import {SignUpBox, SignUpContainer} from "../../components/utils/UtilComponents";

const validation = yup.object().shape({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required("Email is a required field"),
    password: yup
        .string()
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
        })
})
;
const SignUp = () => {

    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")

    const { createUser } = Auth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        //e.preventDefault();
        try {
            await createUser(signUpEmail, signUpPassword);
            console.log(auth.currentUser)
            navigate('/contulMeu')
        } catch (e) {
            console.log(e.message);
            if (e.code === "auth/email-already-in-use"){
                document.querySelector('.error').innerHTML = "Email already in use";
            }

        }
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: validation,
        onSubmit: handleSubmit
    });


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <SignUpContainer>
                <SignUpBox>
                    <h2>Don't have an ARThub account?<br/>SingUp now!</h2>

                    <TextField
                        fullWidth
                        id="email"
                        label="Adresa de email"
                        name='email'
                        type='email'
                        variant="standard"
                        size='small'
                        onChange={(e) => {setSignUpEmail(e.target.value); formik.handleChange(e)}}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
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
                        onChange={(event) => {setSignUpPassword(event.target.value); formik.handleChange(event)}}
                        value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        id="confirmPassword"
                        label="Confirma Parola"
                        name='confirmPassword'
                        variant="standard"
                        size='small'
                        margin="normal"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />

                    <div style={{fontSize: "20px"}}>
                        Already have an account? <Link style={{textDecoration: "none", fontSize: "20px"}} to="/LogIn">Login</Link> now.
                    </div>
                    <Button
                        fullWidth
                        id='submit-button'
                        type='submit'
                        variant="contained"
                        style={{backgroundColor: "white", borderRadius: "20px", color: "black", fontSize: "medium", fontWeight: "bold"}}
                    >
                        Continue
                    </Button>
                </SignUpBox>
            </SignUpContainer>
            </form>
        </div>
    );
};

export default SignUp;