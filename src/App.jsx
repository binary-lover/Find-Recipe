import React from "react";
import HomePage from "./components/pages/HomePage";
import Sidebar from "./components/Sidebar";
import FavoritesPage from "./components/pages/FavoritesPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div> 
  );
}

export default App;
