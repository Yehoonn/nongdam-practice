import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Header from "../Components/Header";
import AllProduct from "../Components/AllProduct";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/all" element={<AllProduct />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
