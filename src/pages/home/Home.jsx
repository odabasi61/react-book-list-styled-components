import React, { useState } from "react";
import { HomeContainer, HomeImg, MainContainer } from "./Home.style";
import Header from "../../components/header/Header";
import homeImg from "../../assets/books.jpg";

const Home = () => {
  // const printType = ["all","books","magazines"]
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);

  return (
    <HomeContainer>
      <Header setQuery={setQuery} setSelectType={setSelectType} />

      <HomeImg>
        <img src={homeImg} alt="home image" />
      </HomeImg>

      <MainContainer></MainContainer>
    </HomeContainer>
  );
};

export default Home;
