import { useState } from "react";
import Card from "../components/cardComponent";
import API from "../helpers/serverHelper";

const SingleSessionComponent = () => {
  const [session, setSession] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [error, setError] = useState("");
  const searchSession = async () => {
    try {
      const res = await API.get(`/sessions/search/${searchId}`);
      setSession(res.data);
      setError("");
    } catch (error) {
      setError("Session not found or server error.");
      console.error("Error found while searching:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-start gap-6">
      <input
        type="text"
        placeholder="search by ID: "
        value={searchId}
        onChange={(e) => {
          setSearchId(e.target.value);
        }}
        className="px-4 py-2 border border-gray-300 rounded text-black w-80"
      />
      <button
        onClick={searchSession}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Search
      </button>
      {error && <p className="text-red-400">{error}</p>}
      {session && (
        <Card
          name={session.user?.name}
          email={session.user?.email}
          title={session.title}
          description={session.content}
          isPublished={session.isPublished}
        />
      )}
    </div>
  );
};

export default SingleSessionComponent;
