import { spinnerIcon } from "@/assets";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import Button2 from "../utilities/Button2";
import postAPI from "../utilities/helpers/postApi";
import { useToast } from "@chakra-ui/react";
import { setProfileData } from "@/features/user/userDetail";
import EmailChangeModal from "../Modals/EmailChangeModal";
const Profile = ({ onOpen }) => {
  const toast = useToast();
  const [profileEdit, setProfileEdit] = useState(false);
  const [profileEditLoading, setProfileEditLoading] = useState(false);
  const dispatch = useDispatch();
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
  const modalRef = useRef(null);

  const handleModal = (action) => {
    if (action === "open") modalRef.current.onOpen();
    else modalRef.current.onClose();
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
    if (!profileEdit) return;
    const user = JSON.parse(getCookie("user"));
    if (user.email !== userData.email) {
      const payload = {
        ...userData,
        changeTo: userData.email,
        requesterEmail: user.email,
        type: "emailChangeRequest",
      };
      delete payload.email;
      postAPI("/api/profile/update-profile", payload).then((res) => {
        if (res.status === 1) {
          handleModal("open");
        } else {
          toast({
            title: "Error",
            description: res.message,
            status: "error",
            duration: 5000,
            position: "top-right",
          });
        }
      });
    } else {
      setProfileEditLoading(true);
      postAPI("/api/profile/update-profile", {
        userData,
        type: "profileChange",
      }).then((res) => {
        if (res.status === 1) {
          const newUser = {
            ...user,
            firstName: userData.firstName,
            lastName: userData.lastName,
          };
          document.cookie = `user=${JSON.stringify(newUser)}; path=/`;
          dispatch(setProfileData(newUser));
          setProfileEditLoading(false);
          setProfileEdit(false);
          toast({
            title: "Profile Updated",
            description: "Your profile has been updated successfully",
            status: "success",
            duration: 5000,
            position: "top-right",
          });
        } else {
          setProfileEditLoading(false);

          toast({
            title: "Error",
            description: "Something went wrong",
            status: "error",
            duration: 5000,
            position: "top-right",
          });
        }
      });
    }
  };
  const verifyBtnState = useSelector((state) => state.userDetail.activeStatus);
  return (
    <form className="flex p-5 flex-col w-[100%] text-white bg-[#232020] mt-6 rounded-[10px]">
      <EmailChangeModal changeToEmail={userData.email} ref={modalRef} />
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
        icon={profileEditLoading}
        iconSrc={spinnerIcon}
      />
    </form>
  );
};

export default Profile;
