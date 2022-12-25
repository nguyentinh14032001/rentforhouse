import React, { createContext, useEffect, useState } from "react";

import { baseURL } from "api/axios";
import axios from "axios";
import Header from "layout/Header";
import Navbar from "layout/Navbar";
import ProFileInfo from "components/profilepage/ProFileInfo";
import ImageControl from "components/profilepage/ImageControl";

import "assets/sass/profilepage/ProfilePage.scss";
export const ProfileContext = createContext();

const ProfilePage = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  const [profile, setProfile] = useState();
  const [isChange, setIsChange] = useState(false);

  const [show, setShow] = useState({
    editBtn: false,
    imageControl: false,
  });

  const [image, setImage] = useState({
    newImage: "",
    oldImage: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/profiles/`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            console.log(response);
            setProfile(response?.data?.data);
            setImage((prevState) => ({
              ...prevState,
              newImage: response?.data?.data?.image,
            }));
            setIsChange(false);
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [isChange == true]);
  const value = { image, setImage, show, setShow, profile, setIsChange };

  return (
    <>
      <Header></Header>

      <ProfileContext.Provider value={value}>
        {profile && <ProFileInfo />}
        {show?.imageControl == true && <ImageControl />}
      </ProfileContext.Provider>
    </>
  );
};

export default ProfilePage;
