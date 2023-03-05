import React from "react";
import Button2 from "../utilities/Button2";

const ChangePassword = () => {
  const [userData, setUserData] = React.useState({
    oldPassword: "",
    newPassword: "",
  });
  const inputOnChangeHandler = (e, type) => {
    setUserData({
      ...userData,
      [type]: e.target.value,
    });
  };
  return (
    <div className="my-4">
      <div className="flex flex-col">
        <form className="flex p-5 flex-col w-[100%] text-white bg-[#232020] mt-6 rounded-[10px]">
          <h1 className="text-center text-2xl font-bold my-2">
            Change Password
          </h1>
          <div className="p-4 bg-[#3D3939] rounded-[10px] mb-4 input-transition">
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
          <div className="p-4 bg-[#3D3939] rounded-[10px] mb-4 input-transition">
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
          <Button2 name={"Change Password"} disabled={true} />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
