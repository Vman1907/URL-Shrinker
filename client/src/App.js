import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/HomeRouter";
// require("dotenv").config();

function App() {
  console.log(process.env.REACT_APP_SERVER_LINK)
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;

