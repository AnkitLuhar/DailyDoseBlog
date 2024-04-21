import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
