import React from "react";
import MediaCard from "./Card";
import {CardsContainer, MenuBox, MenuContainer, ProduseContainer} from "../../components/utils/UtilComponents";


const Produse = () => {
    return (
        <div>
            <ProduseContainer>
                <MenuContainer>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <MenuBox></MenuBox>
                    </div>
                </MenuContainer>
                <div style={{display: "flex", flexDirection: "column", width: "75%", backgroundColor: "#FFC07F", margin: "50px", boxShadow: "1px 2px 5px"}}>
                <span style={{color: "white", fontSize: "50px", textAlign: "center", marginTop: "20px"}}>
                    Produse
                </span>
                    <CardsContainer>
                        <div style={{display: "flex", flexDirection:"row", justifyContent: "center", flexWrap: "wrap", gap: "30px"}}>
                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard>Printesa Nini</MediaCard>
                        </div>
                    </CardsContainer>
                </div>
            </ProduseContainer>
        </div>
);
};

export default Produse;
