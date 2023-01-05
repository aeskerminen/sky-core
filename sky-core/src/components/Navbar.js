import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "./login/LogoutButton";
import Timer from "./widgets/Timer";
import Stopwatch from "./widgets/Stopwatch";

const Navbar = () => {
  const { user } = useAuth0();
  const [displayStopwatch, setDisplayStopwatch] = useState(true);
  const [displayTimer, setDisplayTimer] = useState(true);

  return (
    <div className="flex items-center p-3 bg-blue-500 shadow-lg">
      <div className="flex mr-auto">
        <LogoutButton></LogoutButton>
      </div>
      <div className="flex items-center flex-shrink-1 text-white mr-6">
        <span className="font-semibold text-2xl tracking-normal">Sky Core</span>
      </div>
      <Timer displayTimer={displayTimer} />
      <Stopwatch displayStopwatch={displayStopwatch} />
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
