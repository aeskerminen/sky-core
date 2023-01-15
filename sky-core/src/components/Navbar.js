import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "./login/LogoutButton";
import Timer from "./widgets/Timer";
import Stopwatch from "./widgets/Stopwatch";
import { LIST_ICON, PLUS_ICON, TOGGLE_ICON, X_ICON } from "../helpers/icons";

const Navbar = (props) => {
  const { user } = useAuth0();
  const [displayStopwatch, setDisplayStopwatch] = useState(false);
  const [displayTimer, setDisplayTimer] = useState(false);

  return (
    <div
      className="flex justify-between items-center  p-3 bg-blue-500 shadow-lg"
      style={{ caretColor: "transparent" }}
    >
      <div
        onClick={props.toggleSidebar}
        className="bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 shadow-md rounded-md text-white mr-2 p-2"
      >
        <LIST_ICON></LIST_ICON>
      </div>
      <LogoutButton></LogoutButton>
      <div className="flex flex-row justify-center ml-auto gap-x-2">
        <Timer displayTimer={displayTimer} />
        <button
          id="timerbtn"
          title="Timer"
          className="bg-white rounded-md shadow-md p-1"
          onClick={() => {
            setDisplayTimer(!displayTimer);
          }}
        >
          <TOGGLE_ICON bool={displayTimer}></TOGGLE_ICON>
        </button>
        <button
          id="stopwatchbtn"
          title="Stopwatch"
          className="bg-white rounded-md shadow-md p-1"
          onClick={() => {
            setDisplayStopwatch(!displayStopwatch);
          }}
        >
          <TOGGLE_ICON bool={displayStopwatch}></TOGGLE_ICON>
        </button>
        <Stopwatch displayStopwatch={displayStopwatch} />
      </div>

      <div className="flex ml-auto">
        <button
          type="button"
          className="button bg-blue-700 text-white rounded-xl pt-2 pb-2 pl-4 pr-4"
        >
          <span className="font-semibold text-base tracking-wide">
            {user?.name}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
