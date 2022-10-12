import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Img from "../../Assets/quiz.jpg";

const Home = () => {
  const info = useLoaderData();
  console.log(info.data);
  return <div className="w-9/12 mx-auto"></div>;
};

export default Home;
