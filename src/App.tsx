import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import CreatorsPage from "./pages/CreatorsPage";
import HomePage from "./pages/HomePage";
import PodcastersPage from "./pages/PodcastersPage";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcasters" element={<PodcastersPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
