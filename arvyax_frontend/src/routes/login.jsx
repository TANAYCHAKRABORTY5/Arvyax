import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../helpers/serverHelper";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useState(["token"]);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await API.post("/login", { email, password });
      console.log("Login response:", res.data);
      localStorage.setItem("token", res.data.user.token);
      console.log(localStorage.getItem("token")); // should print the JWT

      navigate("/session");
    } catch (error) {
      console.error(
        "Login failed:",
        err.response?.data?.message || err.message
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Arvyax
        </h1>
        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
