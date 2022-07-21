import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Form from "./pages/Formpage";
import Deletepage from "./pages/Deletepage";
import Editpage from "./pages/Editpage";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Form />} />
        <Route path="/delete" element={<Deletepage />} />
        <Route path="/edit" element={<Editpage />} />
      </Routes>
    </Router>
  );
}
