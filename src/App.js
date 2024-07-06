import Navbar from "./components/Navbar";
// eslint-disable-next-line
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="bg-pink-950 text-white justify-evenly hover:text-yellow-400 p-4 text-2xl" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
