import { useEffect, useState } from "react";
import Card from "../components/cardComponent";
import API from "../helpers/serverHelper";
import { useNavigate } from "react-router-dom";

const MySessionComponent = () => {
  const navigate = useNavigate();

  const [sessionData, setSessionData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await API.get("/sessions/mysessions");
        setSessionData(res.data);
      } catch (error) {
        console.error("Error fetching sessions:", error.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">My Sessions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sessionData.map((item) => (
          <Card
            key={item._id}
            name={item.user?.name}
            email={item.user?.email}
            title={item.title}
            description={item.content}
            isPublished={item.isPublished}
          />
        ))}
      </div>
      <div
        className="cursor-pointer flex mt-auto justify-start"
        onClick={() => {
          navigate("/session");
        }}
      >
        Back to Session
      </div>
    </div>
  );
};

export default MySessionComponent;
