import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Creators from "./pages/Creators";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div>
      <nav className="flex justify-between p-4 bg-black border-b border-gray-800">
        <h1 className="font-bold text-xl">☕ Cheza Kama Wewe</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/creators">Creators</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
