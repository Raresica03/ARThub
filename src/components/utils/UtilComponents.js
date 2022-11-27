import styled from "styled-components";

//Home page

export const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

export const LeftPageContainer = styled.div`
  height: 100%;
  width: 50%;
`;

export const RightPageContainer = styled.div`
  height: 100%;
  width: 50%;
`;

export const OutsideCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
  border-radius: 100%;
  background-color: white;
  padding: 4px;
  cursor: pointer;
  box-shadow: 1px 2px 5px;
`;

export const InsideCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #721121;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

export const PictureContainer1 = styled.div`
  background-color: #FFC07F;
  height: 321px;
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 5px;
`;

export const PictureContainer2 = styled.div`
  background-color: #FFC07F;
  height: 405px;
  width: 690px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 5px;
`;

//Product page
export const MenuContainer = styled.div`
  height: 100%;
  width: 25%;
  `;

export const CardsContainer = styled.div`
  height: 100%;
  padding: 30px;
  `;

export const ProduseContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  `;

export const MenuBox = styled.div`
  background-color: #FFC07F;
  padding: 20px;
  position: fixed;
  width: 20%;
  height: 40vw;
  margin-top: 50px;
  box-shadow: 1px 2px 5px;
  `;

//Login page

export const LogInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const LogInBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 5px;
  border-radius: 10px;
  row-gap: 30px;
  padding: 30px;
  background-color: #FFC07F;
  height: auto;
  width: 500px;
  text-align: center;
  margin-top: 50px;
`;

//Signup page

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
    `;

export const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 5px;
  border-radius: 10px;
  row-gap: 30px;
  padding: 30px;
  background-color: #FFC07F;
  height: auto;
  width: 500px;
  text-align: center;
  margin-top: 50px;
    `;