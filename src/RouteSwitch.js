import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import View from "./View/View.js";
import Create from "./Create/Create.js";

const RouteSwitch = () => {
  return (
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/view" element={<View />}/>
      </Routes>
  );
};

export default RouteSwitch;