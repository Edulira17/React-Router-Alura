import styles from './About.module.css'
import PostModel from "components/PostModel"


import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/minha_picture.png'

const About = () => {
    return (
        <PostModel
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Eduardo!
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto do Eduardo no espelho.'
                className={styles.fotoSobreMim}
            />

            <p>
                Oi, tudo bem? Eu sou um estudante de programação aprendendo desenvolvimento Web com <b>ReactJS</b>.

                Estou começando agora sobre rotas utilizando uma biblioteca externa chamada <b>React-Router</b>, estou criando essa simples SPA (Single Page Application) para a prática de conceitos importantissímos do React-Router-DOM como: Rotas Aninhadas, useLocation, NavLink, Hooks, BrowserRouter e etc.  
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aperiam? Eveniet exercitationem dicta atque harum illum mollitia quod doloribus voluptate voluptates, dolore aut officiis laboriosam repudiandae eligendi recusandae quasi cupiditate.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo sapiente. Distinctio obcaecati velit praesentium vero eveniet sit perspiciatis repellat tenetur hic deserunt neque, harum illo error, nostrum, maxime delectus!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aperiam? Eveniet exercitationem dicta atque harum illum mollitia quod doloribus voluptate voluptates, dolore aut officiis laboriosam repudiandae eligendi recusandae quasi cupiditate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit officiis laudantium iure, nihil quod earum voluptatem saepe eligendi illo ipsam quae autem repellendus atque voluptate nostrum error ab obcaecati?
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aperiam? Eveniet exercitationem dicta atque harum illum mollitia quod doloribus voluptate voluptates, dolore aut officiis laboriosam repudiandae eligendi recusandae quasi cupiditate.
            </p>
        
        </PostModel>
    )
}

export default About