import React, { createContext, useEffect, useState } from "react";

import { baseURL } from "api/axios";
import axios from "axios";
import Navbar from "layout/Navbar";
import ProfileImage from "components/profilepage/ProfileImage";
import ProFileInfo from "components/profilepage/ProFileInfo";
import ImageControl from "components/profilepage/ImageControl";

import "assets/sass/profilepage/ProfilePage.scss";
export const ProfileContext = createContext();

const ProfilePage = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  const [profile, setProfile] = useState();

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
            setProfile(response?.data?.data);
            setImage((prevState) => ({
              ...prevState,
              newImage: response?.data?.data?.image,
            }));
          })
          .catch(function (response) {});
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const value = { image, setImage, show, setShow, profile };

  return (
    <ProfileContext.Provider value={value}>
      <Navbar />
      <div className="mx-auto mt-8 grid w-fit max-w-[90vw] grid-cols-3 pt-8">
        <ProfileImage />
        <ProFileInfo />
      </div>

      {show?.imageControl == true && <ImageControl />}
    </ProfileContext.Provider>
  );
};

export default ProfilePage;
