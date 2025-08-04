import { useState } from "react";
import Card from "../components/cardComponent";
import API from "../helpers/serverHelper";

const PublishSessionComponent = () => {
  const [publishId, setPublishId] = useState("");
  const [session, setSession] = useState(null);

  const publishSession = async () => {
    try {
      const res = await API.post(`/sessions/publish/${publishId}`);
      setSession(res.data.updatedSession);
    } catch (error) {
      console.error("Failed to publish", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-start gap-6">
      <input
        type="text"
        placeholder="search by ID: "
        value={publishId}
        onChange={(e) => {
          setPublishId(e.target.value);
        }}
        className="px-4 py-2 border border-gray-300 rounded text-black w-80"
      />

      <button
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={publishSession}
      >
        Publish
      </button>
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

export default PublishSessionComponent;
