import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "components/Footer";
import PageDefault from "components/PageDefault";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      
      {/* Responsável pela parte do roteamento */}
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        
        <Route path="posts/:id" element={<Post />} />
        {/* Cai nessa rota quando a aplicação nao encontra nenhuma rota válida*/}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
