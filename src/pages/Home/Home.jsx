import React from "react";
import {
    HomeContainer,
    InsideCircle,
    LeftPageContainer,
    OutsideCircle,
    PictureContainer1,
    PictureContainer2,
    RightPageContainer
} from "../../components/utils/UtilComponents";
import arrowUP from "../../assets/arrowUP.png";
import paint1 from "../../assets/paint1.jpg"
import paint2 from "../../assets/paint2.jpg"

const Home = () => {

    return (<div>
        <HomeContainer>
            <LeftPageContainer>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "50px" }}>
                    <span style={{ color: "white", fontSize: "100px", fontWeight: "bold" }}>
                        The next generation of art.
                    </span>
                    <span style={{ color: "white", fontSize: "30px", fontStyle: "italic", marginLeft: "40px" }}>
                        "Arta nu este niciodată terminată ci doar abandonată." <br /> - Leonardo Da Vinci
                    </span>
                    <div style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
                        <OutsideCircle>
                            <InsideCircle>
                                <a href="/Produse" style={{ textDecoration: "none" }}>
                                    <div style={{
                                        display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "row"
                                    }}>
                                        <span style={{ fontSize: "40px", color: "white", fontWeight: "bold" }}>
                                            Get <img src={arrowUP} alt="arrow-up"
                                                style={{ height: "35px", width: "35px" }} /><br /> started!
                                        </span>
                                    </div>
                                </a>
                            </InsideCircle>
                        </OutsideCircle>
                    </div>
                    <span style={{ color: "white", fontSize: "30px", fontWeight: "bold", marginTop: "100px" }}>
                        Acesta este un magazin online pentru vânzarea picturilor!
                    </span>
                </div>
            </LeftPageContainer>
            <RightPageContainer>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "50px"
                }}>
                    <PictureContainer1>
                        <img src={paint1} alt="painting-1" style={{ height: "281px", width: "500px" }} />
                    </PictureContainer1>
                    <PictureContainer2 style={{ marginTop: "80px" }}>
                        <img src={paint2} alt="painting-2" style={{ height: "365px", width: "650px" }} />
                    </PictureContainer2>
                </div>
            </RightPageContainer>
        </HomeContainer>
    </div>);
};

export default Home;
