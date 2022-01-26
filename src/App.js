import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Blog from "./Components/Pages/Blog/Blog";
import Home from "./Components/Pages/Home/Home";
import NextTrip from "./Components/Pages/NextTrip/NextTrip";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/next-trip" element={<NextTrip />} />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
