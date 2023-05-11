"use client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
