import Banner from "components/Banner"
import { Outlet } from "react-router-dom"

export default function PageDefault() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  )
}



// Rotas Aninhadas:

/*
  Na rota '/', a estrutura a ser renderizada é:
    <PageDefault>
      <Inicio />
    </PageDefault>

  Na rota '/about', a estrutura a ser renderizada é:
    <PageDefault>
      <About />
    </PageDefault>
*/