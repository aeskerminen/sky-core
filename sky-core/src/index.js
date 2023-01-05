import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const client_id = process.env.REACT_APP_AUTH0_CLIENT_ID

const domain = "dev-p68agh7qnfrg23gj.eu.auth0.com";
const client_id = "OuW2oWPkVU4bMeLbLAbr18vlDhaJ2wvN";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={client_id}
      redirectUri={window.location.origin}
    >
      {console.log(domain)}
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
