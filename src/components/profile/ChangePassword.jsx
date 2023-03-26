import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Button2 from "../utilities/Button2";
import { getCookie } from "../utilities/helpers/helpers";
import postAPI from "../utilities/helpers/postApi";

const ChangePassword = () => {
  const toast = useToast();
  const [userData, setUserData] = React.useState({
    oldPassword: "",
    newPassword: "",
  });
  const [isDisabled, setIsDisabled] = React.useState(true);
  const inputOnChangeHandler = (e, type) => {
    setUserData({
      ...userData,
      [type]: e.target.value,
    });
  };
  useEffect(() => {
    if (userData.oldPassword && userData.newPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userData]);
  const handlePasswordChange = (e) => {
    e.preventDefault();
    const payload = {
      oldPassword: userData.oldPassword,
      newPassword: userData.newPassword,
      email: JSON.parse(getCookie("user")).email,
    };
    postAPI("/api/auth/change-password", payload).then((res) => {
      toast({
        title: res.status === 1 ? "Success" : "Error",
        description: res.message,
        position: "top-right",
        status: res.status === 1 ? "success" : "error",
        duration: 3000,
      });
      setUserData((prev) => {
        return {
          ...prev,
          oldPassword: "",
          newPassword: "",
        };
      });
    });
  };
  return (
    <div className="mb-[6.5rem] sm:mb-0">
      <div className="flex flex-col">
        <div className="flex pt-0 pb-5 flex-col w-[100%] text-white bg-[#232020] rounded-b-[10px]">
          <h1 className="text-center text-2xl font-bold mb-7 mt-7">
            Change Password
          </h1>
          <div className="w-[100%] flex">
            <div className="sm:w-[50%] w-[100%]">
              <div className="px-4 py-2 bg-[#3D3939] rounded-[10px] mb-4 input-transition ">
                <div className="w-[100%] label-wrapper">
                  <label
                    htmlFor="oldPassword"
                    className="text-sm inline-block label-transition font-bold"
                  >
                    Enter Old Password
                  </label>
                </div>
                <input
                  className="bg-transparent focus:outline-none float-input w-[100%] "
                  name="oldPassword"
                  id="oldPassword"
                  type="text"
                  value={userData.oldPassword}
                  onChange={(e) => inputOnChangeHandler(e, "oldPassword")}
                />
              </div>
              <div className="px-4 py-2 bg-[#3D3939] rounded-[10px] mb-4 input-transition ">
                <div className="w-[100%] label-wrapper">
                  <label
                    htmlFor="newPassword"
                    className="text-sm inline-block label-transition font-bold"
                  >
                    Enter New Password
                  </label>
                </div>
                <input
                  className="bg-transparent focus:outline-none float-input w-[100%] "
                  name="newPassword"
                  id="newPassword"
                  type="text"
                  value={userData.newPassword}
                  onChange={(e) => inputOnChangeHandler(e, "newPassword")}
                />
              </div>
            </div>
            <div className="hidden sm:flex ml-[2rem] items-center">
              <Button2
                name={"Change Password"}
                disabled={isDisabled}
                handlerFunction={handlePasswordChange}
              />
            </div>
          </div>
          <div className="sm:hidden">
            <Button2
              width={"w-[100%] sm:w-[50%]"}
              name={"Change Password"}
              disabled={isDisabled}
              handlerFunction={handlePasswordChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
