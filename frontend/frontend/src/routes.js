import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Form from "./pages/Formpage";
import Deletepage from "./pages/Deletepage";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/delete" element={<Deletepage />} />
      </Routes>
    </Router>
  );
}
