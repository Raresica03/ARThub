import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Auth} from '../../global/Auth';
import {Button} from '@mui/material'
import {ContulMeuContainer, ContulMeuBox} from "../../components/utils/UtilComponents";

const ContulMeu = () => {
    const {user, logout} = Auth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div>
            <ContulMeuContainer>
                <ContulMeuBox>

                    <h1>Contul Meu</h1>
                    <p>{user && user.email ? "Esti logat ca: " + `${user.email}` : "Momentan nu esti logat"}</p>

                    <Button id='submit-button' type='submit' variant='contained' href='/AddProduse'>
                        Creaza produs
                    </Button>
                    <Button id='submit-button' type='submit' variant='contained' href='/CosulMeu'>
                        Cosul meu
                    </Button>

                    <h4>Nu ai cont ARThub?</h4>
                    <Button id='submit-button' type='submit' variant="contained" href='/SignUp'>
                        Sign Up
                    </Button>

                    {!(user && user.email) ?
                        <Button id='submit-button' type='submit' variant="contained" href='/logIn'>
                            Log in
                        </Button> : null}
                    {user && user.email ?
                        <Button id='submit-button' type='submit' variant="contained" onClick={handleLogout}>
                            Log out
                        </Button> : null}

                </ContulMeuBox>
            </ContulMeuContainer>
        </div>
    );
};

export default ContulMeu;