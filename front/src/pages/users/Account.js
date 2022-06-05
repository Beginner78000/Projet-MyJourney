import React from "react";
import { useState } from "react";
import Profile from "../Profile";
import { getItem } from "../../services/LocaleStorage";
import Journey from "../Journey";
import Favoris from "../Favoris";
import "./account.scss";
// import Title from "../../components/Title/Title";
// import Footer from "../../components/Footer/Footer";
import Reviews from "../Reviews";
import phototest from "./background.jpg";
import axios from "axios";

const Account = (props) => {
  const [curentTab, setCurrentTab] = useState({ name: "profile" });
  const [tabs] = useState([
    { tabKey: "profile", tabTitle: "Profil" },
    { tabKey: "reviews", tabTitle: "Avis" },
    { tabKey: "journey", tabTitle: "Journey" },
    { tabKey: "favoris", tabTitle: "Favoris" },
  ]);
  const handleTabs = (name) => {
    setCurrentTab({ name });
  };
  const [profileImg, setProfileImg] = useState(phototest);
  const id = 17;
  const imageHandler = (e) => {
    const apiDestination = `http://localhost:3001/api/users/${id}`;
    axios.patch(apiDestination).then(function (response) {
      console.log(response.data);
    });
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
        console.log(typeof reader);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      {/* <div className='title--account'>
        <Title />
      </div> */}

      <div className='page'>
        {/* <div className='containerAccount'> */}
          {/* <h1 className='heading'>Add your Image</h1> */}
            <img src={profileImg} alt='' id='img' className='imgProfil' />
          <input
            type='file'
            accept='image/*'
            name='image-upload'
            id='input'
            onChange={imageHandler}
          />
          {/* <div className='label'>
            <label className='image-upload' htmlFor='input'>
              <i className='material-icons'></i>
              Modifier
            </label>
          </div> */}
        {/* </div> */}
        </div>
      <div className='tabs'>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={`account-tabs-pane--${index}`}
              className={`tabs-pane ${
                curentTab.name === tab.tabKey ? "active" : ""
              }`}
            >
              <span onClick={() => handleTabs(tab.tabKey)}>{tab.tabTitle}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* <div className='tabs-contents'> */}
      
        {curentTab.name === "profile" && (
          <Profile pseudo={getItem("MyJourneyPseudo")} />
        )}
        {curentTab.name === "reviews" && <Reviews />}
        {curentTab.name === "journey" && <Journey />}
        {curentTab.name === "favoris" && <Favoris />}
      {/* </div> */}
      {/* <div className='footerAbout'>
        <Footer />
      </div> */}
    </>
  );
};

export default Account;
