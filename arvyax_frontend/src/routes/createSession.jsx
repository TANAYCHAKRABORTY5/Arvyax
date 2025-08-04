import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../helpers/serverHelper";

const CreateSessionComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const navigate = useNavigate();

  const create = async () => {
    try {
      const res = await API.post("/sessions/create", {
        title,
        content,
        isPublished,
      });
      console.log("Session Created:", res.data);
      navigate("/session");
    } catch (error) {
      console.error("Creation Failed: ", error.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          SignUp to Arvyax
        </h1>
        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter Content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />

        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="mr-2"
          />
          <span className="text-gray-800">Publish Now?</span>
        </label>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={(e) => {
            e.preventDefault();
            create();
          }}
        >
          Create session
        </button>
      </div>
    </div>
  );
};

export default CreateSessionComponent;
