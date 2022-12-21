import { TextField, Button } from "@mui/material";
import { CreateProductBox } from '../utils/UtilComponents';
import * as React from 'react';
import { useState } from "react";
import { database, storage } from "../../firebase"
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { OutlinedInput } from '@mui/material'
import { Auth } from '../../global/Auth'

const CreateProduct = () => {

    const [newProductName, setNewProductName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newImage, setNewImage] = useState("");
    const [description, setDescription] = useState("");

    let productId = ""

    const { user } = Auth();

    const navigate = useNavigate()

    const addNewProduct = async (e) => {
        e.preventDefault(e);
        if (newProductName && newProductName.length <= 0 && newPrice && newPrice.length <= 0){
            alert("Post title and price should not be empty!");
            return
        }

        const { id } = await addDoc(collection(database, 'products'), {
            title: newProductName,
            price: newPrice,
            image: "",
            content: description,
        })
        console.log(id)
        productId = id

        uploadImage()

        setNewProductName("");
        setNewPrice("");
        setNewImage(null)
        setDescription("");

        navigate('/')
    }

    const uploadImage = async () => {
        if (newImage == null) return;
        const imageRef = ref(storage, `images/${newImage.name + productId}`);
        uploadBytes(imageRef, newImage).then(() => {
            listAll(ref(storage, 'images')).then((res) => {
                res.items.forEach((itemRef) => {
                    console.log(itemRef.name)
                    if (itemRef.name.includes(productId)){
                        console.log(itemRef.name) //ajunge
                        getDownloadURL(itemRef).then(async (urll) => {
                            await updateDoc(doc(database, 'products', `${productId}`), {
                                image: urll
                            })
                        })
                    }
                })
            })
        })
    }


    return (
        <form onSubmit={addNewProduct} className="addProduct">
            {!(user) ? <p>Nu esti logat. Logheaza-te pentru a putea adauga un produs nou.</p> :
            <CreateProductBox>
                <h1>Adauga un produs nou</h1>
                <TextField
                    id="productName"
                    label="Product name"
                    variant="outlined"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    style={{display: 'flex'}}
                />
                <TextField
                    id="productPrice"
                    label="Price"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                />
                <OutlinedInput
                    type="file"
                    id="file-input"
                    name="ImageStyle"
                    onChange={(e) => setNewImage(e.target.files[0])}
                    style={{display: 'flex'}}
                />
                <TextField
                    label="Description"
                    id="outlined-multiline-static"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    multiline
                    rows={4}
                >
                </TextField>
                <Button type='submit' variant="contained" sx={{ mb: 5 }}>
                    Adauga
                </Button>
            </CreateProductBox>}
        </form>
    )
}

export default CreateProduct