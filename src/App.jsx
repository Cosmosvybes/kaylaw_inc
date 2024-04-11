import { Route, Router, Routes } from "react-router-dom";
import { Header } from "./Components";
import Events from "./Components/Events";
import KamilEvents from "./Components/KamilEvents";
import Home from "./Components/Home";
import Signin from "./Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Header />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/events" element={<KamilEvents />}></Route>
        <Route path="/activities" element={<Events />}></Route>
      </Routes>
    </>
  );
}

export default App;
