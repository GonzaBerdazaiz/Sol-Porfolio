import { Route, Routes } from "react-router-dom";
import NavBar from "../src/views/NavBar/NavBar";
import Home from "../src/views/Home/Home";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
