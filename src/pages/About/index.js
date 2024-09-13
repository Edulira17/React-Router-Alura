import styles from "./About.module.css";
import PostModel from "components/PostModel";

import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_picture.png";

const About = () => {
  return (
    <PostModel fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Eduardo!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Eduardo no espelho."
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        "Sou Eduardo Lira, estudante de programação com foco em desenvolvimento
        web. Atualmente, estou aprendendo ReactJS, uma das bibliotecas mais
        populares para criar interfaces de usuário. Para aprimorar minhas
        habilidades, estou desenvolvendo uma Single Page Application (SPA)
        utilizando a biblioteca React-Router-DOM. Meu objetivo é dominar
        conceitos essenciais como Rotas Aninhadas, useLocation, NavLink, Hooks e
        BrowserRouter. Estou aplicando essas ferramentas na prática para criar
        aplicações dinâmicas e responsivas, que oferecem uma experiência de
        navegação fluida. Além disso, estou constantemente buscando novas
        maneiras de otimizar minhas aplicações, incorporando as melhores
        práticas de desenvolvimento e UX."
      </p>

      <p className={styles.paragrafo}>
        "Tenho me dedicado a criar projetos desafiadores para fortalecer meu
        entendimento sobre a navegação entre páginas sem a necessidade de
        recarregar a aplicação, utilizando o poder do React-Router. Além disso,
        estou aprofundando meus conhecimentos em Hooks, como o useState e
        useEffect, para gerenciar estados e efeitos colaterais de forma
        eficiente em minhas aplicações. Minha meta é construir aplicações
        robustas e escaláveis, que ofereçam uma excelente experiência ao
        usuário. Com foco em boas práticas, acessibilidade e performance, estou
        sempre buscando feedback e novas maneiras de melhorar minhas
        habilidades."
      </p>
    </PostModel>
  );
};

export default About;
