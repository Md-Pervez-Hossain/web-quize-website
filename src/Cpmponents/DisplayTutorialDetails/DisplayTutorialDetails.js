import React from "react";
import { useLoaderData } from "react-router-dom";
import TutorialQuize from "../TutorialQuize/TutorialQuize";

const DisplayTutorialDetails = () => {
  const tutorialsInfo = useLoaderData();

  return (
    <div>
      <p className="text-2xl font-bold text-center my-8">
        Subject Name : {tutorialsInfo.data.name}
      </p>
      {tutorialsInfo.data.questions.map((questions) => (
        <TutorialQuize key={questions.id} questions={questions}></TutorialQuize>
      ))}
    </div>
  );
};

export default DisplayTutorialDetails;
