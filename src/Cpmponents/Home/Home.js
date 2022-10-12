import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Img from "../../Assets/quiz.jpg";

const Home = () => {
  const info = useLoaderData();
  console.log(info.data);
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8  my-16">
        <div>
          <img src={Img} alt="" className="w-full" />
        </div>

        <div className="md:w-1/2 ">
          <h2 className="text-4xl font-bold mb-5">
            Build Your Technical Knowladge
          </h2>
          <p>
            Put your knowledge about all things technology to the test with our
            15 question quiz and have some nerdy fun in the process. Because
            everything tech, from computers and the internet to software and big
            data, changes rapidly on a day-to-day basis,
          </p>
          <Link to="/tutorials">
            <button className="bg-blue-500 px-3 py-2 text-center text-white font-bold mt-5 text-2xl">
              Start Quize
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-5 mb-16">
        {info.data.map((info) => (
          <Link to="/tutorials" key={info.id}>
            <div className="bg-gray-200">
              <img src={info.logo} alt="" />
              <p className="text-3xl font-bold text-center py-5">{info.name}</p>
              <p className="text-3xl font-bold text-center py-5">
                Total Quize : {info.total}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
