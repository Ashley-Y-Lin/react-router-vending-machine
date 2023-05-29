import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Snack from "./Snack";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack/:name" element={<Snack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
