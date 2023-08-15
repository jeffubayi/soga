import React from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <button
        className="bg-primary px-4 py-2 rounded w-full"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}
