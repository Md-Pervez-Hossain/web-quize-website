import React from "react";
import { useNavigate } from "react-router-dom";

const TutorialsDetails = ({ tutorial }) => {
  const { id, logo, name, total } = tutorial;
  const navigate = useNavigate();
  const learnButtonHandler = (id) => {
    navigate(`${id}`);
  };

  return (
    <div className="bg-gray-200 shadow-2xl p-5 ">
      <img src={logo} alt="" />
      <h2 className="text-4xl font-bold my-3"> Tutorial : {name} </h2>
      <p className="text-2xl font-bold my-3"> Total Quize : {total}</p>
      <button
        onClick={() => learnButtonHandler(id)}
        className="bg-blue-400 px-3 py-2 text-center font-semibold text-white"
      >
        Start Quize
      </button>
    </div>
  );
};

export default TutorialsDetails;
