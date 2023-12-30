import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import Footer from "./components/footer/footer";
import Furnitures from "./pages/furnitures/furnitures";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/furnitures" element={<Furnitures />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
