import React from "react";
import { useSelector } from "react-redux";
export default function Profile() {
  const currentUser = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          className="self-center mt-4 rounded-full h-25 w-25 object-cover cursor-pointer"
          alt="profile"
        />
        <input
          type="text"
          name=""
          id="username"
          placeholder="username"
          className="border p-3 rounded-lg "
        />
        <input
          type="email"
          name=""
          id="email"
          placeholder="email"
          className="border p-3 rounded-lg "
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="*******"
          className="border p-3 rounded-lg "
        />
        <button className="bg-teal-600 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-75">
          update
        </button>
      </form>
      <div className=" flex justify-between mt-5 ">
        <span className=" text-xs uppercase text-red-600 cursor-pointer">delete account</span>
        <span className=" text-xs uppercase text-black cursor-pointer">sign out</span>
      </div>
    </div>
  );
}
