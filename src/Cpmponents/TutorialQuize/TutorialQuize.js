import React from "react";
import { toast } from "react-toastify";
import { EyeIcon } from "@heroicons/react/24/solid";

const TutorialQuize = ({ questions }) => {
  console.log(questions);
  const { question, id, options, correctAnswer } = questions;
  console.log(options);
  const handleQuize = (options) => {
    if (options === correctAnswer) {
      toast.success("Correct Answer", { autoClose: 500 });
      return;
    } else {
      toast.warning(" Wrong Answer", { autoClose: 500 });
    }
  };
  const correctButtonHandler = () => {
    toast.success(`Correct Answer is : ${correctAnswer}`, {
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white shadow-2xl md:w-1/2 mx-auto my-5 p-8">
      <div className="flex justify-between">
        <h2 className="font-semibold">Question :{question}</h2>
        <EyeIcon
          onClick={() => correctButtonHandler(id)}
          className="h-6 w-6 text-gray-300 cursor-pointer"
        />
      </div>
      <div>
        {options.map((question, idx) => (
          <div key={idx}>
            <ul onClick={() => handleQuize(question)}>
              <li className=" list-square cursor-pointer bg-gray-100 p-3 my-3 ">
                {question}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialQuize;
