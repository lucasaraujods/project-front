import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Books />} />
        <Route path="/autores" element={<Authors />} />
      </Routes>
    </Router>
  );
}

export default App;


