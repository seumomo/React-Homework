import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./routes/ErrorPage";
import GetBirthYear from "./routes/GetBirthYear";
import Landing from "./routes/Landing";
import YearProvider from "./contexts/Year";
import Horoscope from "./routes/Horoscope";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/getbirthyear",
        element: <GetBirthYear />,
      },
      {
        path: "/horoscope",
        element: <Horoscope />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <YearProvider>
      <RouterProvider router={router} />
    </YearProvider>
  </React.StrictMode>,
);
