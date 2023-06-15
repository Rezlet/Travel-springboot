import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    {/* <React.StrictMode> */}
      <BrowserRouter>
        <GoogleOAuthProvider clientId="230098739655-jge7akm4ttob45d1pus3li0s1k905qin.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);
