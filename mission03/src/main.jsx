import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BirthProvider from "./contexts/Birth";
import "./index.css";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./routes/ErrorPage";
import GetBirthYear from "./routes/GetBirthYear";
import Horoscope from "./routes/Horoscope";
import Landing from "./routes/Landing";

const router = createBrowserRouter([
  {
    path: "/todays-horoscope",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/todays-horoscope",
        element: <Landing />,
      },
      {
        path: "/todays-horoscope/getbirthyear",
        element: <GetBirthYear />,
      },
    ],
  },
  {
    path: "/horoscope",
    element: <Horoscope />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BirthProvider>
      <RouterProvider router={router} />
    </BirthProvider>
  </React.StrictMode>,
);
