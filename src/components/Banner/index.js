import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/eu.jpeg";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.title}>Olá mundo !</h1>

        <p className={styles.paragrafo}>
          Boas-vindas ao meu espaço pessoal! Eu sou Eduardo Lira, estudante de
          programação focado em desenvolvimento web. Aqui, compartilho vários
          conhecimentos e experiências, espero que você aprenda algo novo!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          alt="Circulo colorido para ser o background da imagem do Eduardo sorrindo"
          aria-hidden={true}
          className={styles.circuloColorido}
        />

        <img
          src={minhaFoto}
          className={styles.minhaFoto}
          alt="Foto do Eduardo Sorrindo"
        />
      </div>
    </div>
  );
};

export default Banner;
