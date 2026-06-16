import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Index from "./Pages/Index";
import "./css/global.css";
import CriarCronograma from "./Pages/components/index/CriarCronograma";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criarCronograma" element={<CriarCronograma />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
