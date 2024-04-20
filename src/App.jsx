import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const IntroductionPage = lazy(() => import("./pages/IntroductionPage"));
const RoomPage = lazy(() => import("./pages/RoomPage"));
const JoinRoomPage = lazy(() => import("./pages/JoinRoomPage"));
import { Loader } from "./components/Loader";
import { connectWithSocketIOServer } from "./utils/wss";

function App() {
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/join-room" element={<JoinRoomPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
