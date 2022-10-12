import React from "react";
import { useNavigate } from "react-router-dom";

const TutorialsDetails = ({ tutorial }) => {
  const { id, logo, name } = tutorial;
  const navigate = useNavigate();
  const learnButtonHandler = (id) => {
    navigate(`${id}`);
  };
  return (
    <div className="bg-gray-200 shadow-2xl p-5 ">
      <img src={logo} alt="" />
      <h2 className="text-4xl font-bold my-3"> Tutorial : {name} </h2>
      <button
        onClick={() => learnButtonHandler(id)}
        className="bg-blue-400 px-3 py-2 text-center font-semibold text-white"
      >
        Learn Details
      </button>
    </div>
  );
};

export default TutorialsDetails;
