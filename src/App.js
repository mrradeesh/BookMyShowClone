import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home.page";
import MoviePage from "./Pages/Movie.page";
import PlayPage from "./Pages/Play.page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Movie/:id" element={<MoviePage />} />
        <Route path="/Play" element={<PlayPage />} />
      </Routes>
      <p>App js</p>
    </>
  );
}

export default App;
