import { useNavigate } from "react-router-dom";

const SessionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col text-white items-center justify-center ">
      <div className="space-y-4">
        <div
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/mysession")}
        >
          View All Sessions
        </div>
        <div
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/singlesession")}
        >
          single Session
        </div>
        <div
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/createsession")}
        >
          Create Sessions
        </div>
        <div
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/publishsession")}
        >
          Publish Session
        </div>
      </div>
    </div>
  );
};

export default SessionComponent;
