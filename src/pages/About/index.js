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
        </PostModel>
    )
}

export default About