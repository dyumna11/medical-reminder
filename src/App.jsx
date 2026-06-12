import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Remm from "./Remm";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/reminder"
        element={
          <ProtectedRoute>
            <Remm />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;