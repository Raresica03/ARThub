import React, { useEffect, useState } from "react";
import { auth, database } from "../../firebase";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { Auth } from '../../global/Auth';
import { Button, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { ContulMeuContainer, ContulMeuBox } from "../../components/utils/UtilComponents";

const CosulMeu = () => {

    const [basketList, setBasketList] = useState([])
    const { user } = Auth()
    const navigate = useNavigate();

    const getUser = () => {
        if (auth.currentUser){
            const userID = auth.currentUser.uid
            console.log(userID)
            return userID
        }
        else{
            console.log("not logged")
            return null
        }
    }

    useEffect(() => {
        const userID = getUser()
        console.log(userID)
        if (userID){
            const q = query(collection(database, `${userID}-basket`))
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let prodArr = []
                querySnapshot.forEach((doc) => {
                    console.log(doc.data())
                    prodArr.push({...doc.data(), id: doc.id})
                });
                setBasketList(prodArr)
            })
            return () => unsubscribe()
        }

    }, []);

    console.log(basketList)

    const getTotal = () => {
        let sum = 0
        basketList.map((product) => {
            sum = sum + parseInt(product.price, 10)
        })
        return sum
    }

    const handleSubmit = () => {
        try{
            navigate('/checkout', {state: {basketList: basketList, sum: getTotal()}})
        } catch(e){
            console.log(e.message)
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <ContulMeuContainer>
                {!(user) ? <p>Nu esti logat. Logheaza-te pentru a putea adauga produse in cos.</p> :
                    <ContulMeuBox>
                        { basketList.length === 0 ? <p>Nu ai niciun produs in cos.</p> :
                            <div style={{width: "100%"}}>
                                <table style={{borderCollapse: "collapse", width: "100%"}}>
                                    <tr>
                                        <th></th>
                                        <th>Produs</th>
                                        <th>Pret</th>
                                    </tr>
                                    {basketList.map((val) => {
                                        return(
                                            <tr >
                                                <td><img src={val.image} style={{height: "70px"}} /></td>
                                                <td>{val.title}</td>
                                                <td>{val.price + " RON"}</td>
                                                <td>
                                                    <DeleteIcon
                                                        onClick={ async () => {
                                                            const userID = getUser()
                                                            await deleteDoc(doc(database, `${userID}-basket`, `${val.id}`))
                                                        }}
                                                        sx={{ "&:hover": { color: "red" } }}/>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </table>
                                <Divider />
                                <br></br>
                                <span style={{fontWeight: "bold"}}>Total: {getTotal()} RON</span>
                                <Button fullWidth id='submit-button' variant="contained" type='submit' >Continua spre Checkout</Button>
                            </div>
                        }
                    </ContulMeuBox> }
            </ContulMeuContainer>
        </form>
        </div>
    )
}

export default CosulMeu
