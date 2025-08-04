import { Route, Routes } from "react-router-dom";
import HomeComponent from "./routes/home";
import SessionComponent from "./routes/session";
import LoginComponent from "./routes/login";
import SignupComponent from "./routes/signup";
import CreateSessionComponent from "./routes/createSession";
import MySessionComponent from "./routes/mySession";
import SingleSessionComponent from "./routes/singleSession";
import PublishSessionComponent from "./routes/publishSession";

function App() {
  return (
    <div className="w-screen h-screen ">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/session" element={<SessionComponent />} />
        <Route path="/mysession" element={<MySessionComponent />} />
        <Route path="/singlesession" element={<SingleSessionComponent />} />
        <Route path="/createsession" element={<CreateSessionComponent />} />
        <Route path="/publishsession" element={<PublishSessionComponent />} />
      </Routes>
    </div>
  );
}

export default App;
