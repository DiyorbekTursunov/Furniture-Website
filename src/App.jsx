import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import Footer from "./components/footer/footer";
import Furnitures from "./pages/furnitures/furnitures";
import My_works from "./pages/my_works/my_works";
import Contact_us from "./pages/contact_us/contact_us";
import Purchase from "./pages/purchase/purchase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/furnitures" element={<Furnitures />} />
        <Route path="/my-works" element={<My_works />} />
        <Route path="/contact-us" element={<Contact_us />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
