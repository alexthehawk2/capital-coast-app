import { spinnerIcon } from "@/assets";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "..";
import Button2 from "../utilities/Button2";
import postAPI from "../utilities/helpers/postApi";

const Profile = ({ onOpen }) => {
  const [profileEdit, setProfileEdit] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const [cookieName, cookieValue] = cookies[i].split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };
  const inputOnChangeHandler = (e, type) => {
    setUserData({
      ...userData,
      [type]: e.target.value,
    });
  };
  const handleVerifyEmail = () => {
    setLoading(true);
    postAPI(
      "/api/auth/request-verify-email",
      JSON.stringify({ email: userData.email })
    ).then((res) => {
      setLoading(false);
      onOpen();
    });
  };
  useEffect(() => {
    const user = JSON.parse(getCookie("user"));
    setUserData((prev) => {
      return {
        ...prev,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
    });
  }, []);
  useEffect(() => {
    const user = JSON.parse(getCookie("user"));
    if (
      user.firstName !== userData.firstName ||
      user.lastName !== userData.lastName ||
      user.email !== userData.email
    ) {
      setProfileEdit(true);
    } else {
      setProfileEdit(false);
    }
  }, [userData]);
  const profileEditSubmitHandler = (e) => {
    e.preventDefault();
    postAPI("/api/profile/update-profile", userData);
  };
  const verifyBtnState = useSelector((state) => state.userDetail.activeStatus);
  return (
    <form className="flex p-5 flex-col w-[100%] text-white bg-[#232020] mt-6 rounded-[10px]">
      <h1 className="text-center text-2xl font-bold my-2">Profile Details</h1>
      <div className="p-4 bg-[#3D3939] rounded-[10px] mb-4 input-transition">
        <div className="w-[100%] label-wrapper">
          <label
            htmlFor="firstName"
            className="text-sm inline-block label-transition font-bold"
          >
            First Name
          </label>
        </div>
        <input
          className="bg-transparent focus:outline-none float-input w-[100%] "
          name="firstName"
          id="firstName"
          type="text"
          value={userData.firstName}
          onChange={(e) => inputOnChangeHandler(e, "firstName")}
        />
      </div>
      <div className="p-4 bg-[#3D3939] rounded-[10px] mb-4 input-transition">
        <div className="w-[100%] label-wrapper">
          <label
            htmlFor="lastName"
            className="text-sm  inline-block label-transition font-bold"
          >
            Last Name
          </label>
        </div>
        <input
          className="bg-transparent focus:outline-none w-[100%]"
          name="lastName"
          id="lastName"
          type="text"
          value={userData.lastName}
          onChange={(e) => inputOnChangeHandler(e, "lastName")}
        />
      </div>
      <div>
        <div className="p-4 bg-[#3D3939] rounded-[10px] mb-4 input-transition">
          <div className="w-[100%] label-wrapper">
            <label
              htmlFor="email"
              className="text-sm inline-block label-transition font-bold"
            >
              Email Address
            </label>
          </div>
          <input
            className="bg-transparent focus:outline-none w-[100%]"
            name="email"
            type="email"
            value={userData.email}
            onChange={(e) => inputOnChangeHandler(e, "email")}
          />
        </div>
        {!verifyBtnState && (
          <div className="mb-4">
            <Button
              name={"Verify Email Address"}
              width="w-[100%]"
              handlerFunction={handleVerifyEmail}
              icon={loading}
              iconSrc={spinnerIcon}
              isDisabled={loading}
            />
          </div>
        )}
      </div>
      <Button2
        name={"Edit Profile Details"}
        disabled={!profileEdit}
        handlerFunction={profileEditSubmitHandler}
      />
    </form>
  );
};

export default Profile;
