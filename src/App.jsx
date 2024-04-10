import { Route, Router, Routes } from "react-router-dom";
import { Header } from "./Components";
import Events from "./Components/Events";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/activities" element={<Events />}></Route>
      </Routes>
    </>
  );
}

export default App;
