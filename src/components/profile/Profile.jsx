import React, { useEffect, useState } from "react";
import { Button } from "..";
import Button2 from "../utilities/Button2";
import postAPI from "../utilities/helpers/postApi";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: "Abir",
    lastName: "Dey",
    email: "test@gg.com",
  });
  const inputOnChangeHandler = (e, type) => {
    setUserData({
      ...userData,
      [type]: e.target.value,
    });
  };
  const handleVerifyEmail = () => {
    postAPI(
      "/api/auth/verify-email",
      JSON.stringify({ email: userData.email })
    );
  };
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
        <div className="mb-4">
          <Button
            name={"Verify Email Address"}
            width="w-[100%]"
            handlerFunction={handleVerifyEmail}
          />
        </div>
      </div>
      <Button2 name={"Edit Profile Details"} disabled={true} />
    </form>
  );
};

export default Profile;
