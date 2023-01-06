import LoginButton from "./LoginButton";

const LoginPage = () => {
  return (
    <div className="bg-blue-300">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className="flex-col"
      >
        <div className="p-2 h-32 bg-blue-500 shadow-md rounded-md flex">
          <div className="flex items-center flex-shrink-1 text-white mr-6">
            <svg
              className="mt-20"
              id="logo"
              width="419"
              height="187"
              viewBox="0 0 419 187"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="65.5" cy="21.5" r="10" stroke="white" />
              <circle cx="229.5" cy="10.5" r="10" stroke="white" />
              <circle cx="187.5" cy="69.5" r="10" stroke="white" />
              <circle cx="157.5" cy="37.5" r="10" stroke="white" />
              <circle cx="105.5" cy="59.5" r="10" stroke="white" />
              <line
                x1="72.6957"
                y1="28.163"
                x2="98.6957"
                y2="52.163"
                stroke="white"
                stroke-width="5"
              />
              <line
                x1="114.991"
                y1="56.7127"
                x2="148.991"
                y2="41.7127"
                stroke="white"
                stroke-width="5"
              />
              <line
                x1="164.869"
                y1="44.3391"
                x2="180.869"
                y2="62.3391"
                stroke="white"
                stroke-width="5"
              />
              <line
                x1="191.972"
                y1="60.538"
                x2="222.972"
                y2="17.538"
                stroke="white"
                stroke-width="5"
              />
            </svg>
            <span className="font-semibold text-7xl tracking-normal">
              Sky Core
            </span>
          </div>
        </div>
        <div className="bg-white rounded-md p-2 m-2">
          <LoginButton></LoginButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
