import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "./login/LogoutButton";
import Timer from "./widgets/Timer";
import Stopwatch from "./widgets/Stopwatch";
import {
  LIST_ICON,
  PLUS_ICON,
  TOGGLE_ICON,
  X_ICON,
  TOGGLE_STOPWATCH_ICON,
  STOPWATCH_ICON,
  STOPWATCH_ICON_FILL,
  TOGGLE_TIMER_ICON,
} from "../helpers/icons";

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
          title="Timer"
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 shadow-md rounded-md text-white p-2"
          onClick={() => {
            setDisplayTimer(!displayTimer);
          }}
        >
          <TOGGLE_TIMER_ICON bool={displayTimer}></TOGGLE_TIMER_ICON>
        </button>
        <button
          title="Stopwatch"
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 shadow-md rounded-md text-white p-2"
          onClick={() => {
            setDisplayStopwatch(!displayStopwatch);
          }}
        >
          <TOGGLE_STOPWATCH_ICON
            bool={displayStopwatch}
          ></TOGGLE_STOPWATCH_ICON>
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
