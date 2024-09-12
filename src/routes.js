import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "components/Footer";
import PageDefault from "components/PageDefault";
import Post from "pages/Post";
import NotFound from "pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      
      {/* Responsável pela parte do roteamento */}
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        {/* Cai nessa rota quando a aplicação nao encontra nenhuma rota válida*/}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
