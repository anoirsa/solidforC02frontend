import "./App.css";
import { useState } from "react";
import Home from "./pages/home/Home";
import { ImageGround } from "./globals/GlobalSC";
import groundImage from "./images/raw_material.jpg";
import Navbar from "./components/navbar/Navbar";
import Chatbar from "./components/chatbar/Chatbar";
import CookieChart from "./pages/home/homeSubComponents/cookieChart/CookieChart";

function App() {
  const [showCookie, setShowCookie] = useState(true);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Chatbar />
      <ImageGround src={groundImage} />
      {showCookie && <CookieChart setShowCookie={setShowCookie} />}
    </div>
  );
}

export default App;
