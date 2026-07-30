import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Menu from "./pages/Menu";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";

import Home from "./pages/home/index.jsx";
import Menu from "./pages/menu/index.jsx";
import About from "./pages/about/index.jsx";
import Contact from "./pages/contact/index.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main> */}

      <Footer />
    </>
  );
}

export default App;
