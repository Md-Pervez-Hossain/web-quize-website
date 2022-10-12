import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Cpmponents/Layout/Main";
import Tutorial from "./Cpmponents/Tutorial/Tutorial";
import Statistics from "./Cpmponents/Statistics/Statistics";
import Blog from "./Cpmponents/Blog/Blog";
import Error from "./Cpmponents/Error/Error";
import DisplayTutorialDetails from "./Cpmponents/DisplayTutorialDetails/DisplayTutorialDetails";
import Home from "./Cpmponents/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "tutorials",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Tutorial></Tutorial>,
        },

        {
          path: "tutorials/:tutorialId",
          loader: async ({ params }) => {
            return fetch(
              ` https://openapi.programming-hero.com/api/quiz/${params.tutorialId}`
            );
          },
          element: <DisplayTutorialDetails></DisplayTutorialDetails>,
        },
        {
          path: "statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics></Statistics>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "*",
          element: <Error></Error>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
