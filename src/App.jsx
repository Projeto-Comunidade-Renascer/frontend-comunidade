import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Comunidade from "./pages/comunidade/Comunidade"
import Maternidade from "./pages/maternidade/Maternidade";
import Tentantes from "./pages/tentantes/Tentantes";
import Bebes from "./pages/bebes/Bebes";
import Gravidez from "./pages/gravidez/Gravidez";
import Home from "./pages/Home/Home";
import Artigos from "./pages/artigos/Artigos";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/maternidade" element={<Maternidade />} />
          <Route path="/tentantes" element={<Tentantes />} />
          <Route path="/bebes" element={<Bebes />} />
          <Route path="/gravidez" element={<Gravidez />} />
          <Route path="/artigos" element={<Artigos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;