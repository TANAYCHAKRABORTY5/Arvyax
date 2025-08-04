import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full  bg-gray-900 flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl text-white">Home Page</h1>
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm flex flex-col items-start gap-5 text-xl">
        <button
          className="hover:text-blue-600"
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
        <button
          className="hover:text-blue-600"
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
