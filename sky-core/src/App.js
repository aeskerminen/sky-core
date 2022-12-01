import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Editor from "./components/widgets/Editor";

import LoginButton from './components/login/LoginButton'
import LogoutButton from './components/login/LogoutButton'

import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="h-screen flex flex-col bg-slate-500 overflow-hidden">
      {isAuthenticated &&
        <div>
          <div className="flex-none">
            <LogoutButton></LogoutButton>
            <Navbar>
            </Navbar>
          </div>
          <div className="h-screen flex flex-row">
            <div className="grow w-1/6 overflow-hidden mb-2.5">
              <Sidebar></Sidebar>
            </div>

            <div className="grow w-5/6 overflow-hidden m-2 mr-2 mb-2.5 p-1 bg-white">
            </div>
          </div>
        </div>
      }
      {!isAuthenticated &&
        <div>
          <LoginButton></LoginButton>

        </div>
      }
    </div>
  );
}

export default App;
