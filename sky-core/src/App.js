import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Editor from "./components/widgets/Editor";
'import LoginButton from './components/login/LoginButton'

import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="h-screen flex flex-col bg-slate-500 overflow-hidden">
      {isAuthenticated &&
        <div>
          <div className="flex-none">
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
        <LoginPage></LoginPage>
      }
    </div>
  );
}

const LoginPage = () => {
  return (
    <div className="bg-blue-300">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className="flex-col">
        <div className="p-2 h-32 bg-blue-500 shadow-md rounded-md flex">
          <div className="flex items-center flex-shrink-1 text-white mr-6">
            <svg className="fill-current h-16 w-16 mr-4 ml-4" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span className="font-semibold text-7xl tracking-normal">Sky Core</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-2 m-2">
          <LoginButton></LoginButton>
        </div>
      </div>
    </div>
  )
}

export default App;
