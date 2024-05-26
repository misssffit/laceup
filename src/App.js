import Banner from "./Components/Banner/Banner.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import LandingShoe from "./Components/LandingShoe/LandingShoe.jsx";
import Main from "./Components/Main/Main.jsx";
import Catalog from "./Pages/Catalog";
import Landing from "./Pages/Landing";
import ProductInfo from "./Pages/ProductInfo";
import Three from "./Pages/Three.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/ProductInfo" element={<ProductInfo/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
