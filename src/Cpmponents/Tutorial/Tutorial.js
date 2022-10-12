import React from "react";
import { useLoaderData } from "react-router-dom";
import TutorialsDetails from "../TutorialsDetails/TutorialsDetails";

const Tutorial = () => {
  const tutorials = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 w-9/12 mx-auto my-16">
        {tutorials.data.map((tutorial) => (
          <TutorialsDetails
            key={tutorial.id}
            tutorial={tutorial}
          ></TutorialsDetails>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
