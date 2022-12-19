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
              className="fill-current h-16 w-16 mr-4 ml-4"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
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
