import { Route, Routes } from "react-router";
import { Home, SingleHotel } from "./pages";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:name/:address/:id/reserve"
        element={<SingleHotel />}
      />
    </Routes>
  );
}

export default App;
