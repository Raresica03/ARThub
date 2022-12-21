import React, { useEffect, useState } from "react";
import { database } from "../../firebase"
import { collection, onSnapshot, query } from 'firebase/firestore';
import {CardsContainer, ProduseContainer} from "../../components/utils/UtilComponents";
import Products from '../../components/Products/Products'

const Produse = () => {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const q = query(collection(database, "products"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let prodArr = []
            querySnapshot.forEach((doc) => {
                prodArr.push({...doc.data(), id: doc.id})
            });
            setProductsList(prodArr)
        })
        return () => unsubscribe()
    }, []);

    return (
        <div>
            <ProduseContainer>
                <div style={{display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#FFC07F", margin: "50px", boxShadow: "1px 2px 5px"}}>
                <span style={{color: "white", fontSize: "50px", textAlign: "center", marginTop: "20px"}}>
                    Produse
                </span>
                    <CardsContainer>
                        <div style={{display: "flex", flexDirection:"row", justifyContent: "center", flexWrap: "wrap", gap: "30px"}}>
                            <Products data={productsList} />
                        </div>
                    </CardsContainer>
                </div>
            </ProduseContainer>
        </div>
);
};

export default Produse;
