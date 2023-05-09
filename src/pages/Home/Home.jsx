import React from "react";
import "./Home.css";
import ImageFolder from "../../components/ImageFolder/ImageFolder";

const Home = () => {
  return (
    <div className="home-container">
      <ImageFolder
        title="Home Sweet Home"
        kepCim="./images/home.jpg"
        desc="Üdvözlünk az otthonunkban!"
      />
    </div>
  );
};

export default Home;
