import styles from './Footer.module.css'
// Importando uma imagem SVG como um componente React:

// A sintaxe import { ReactComponent as NomeDoComponente } from 'caminho_do_componente'; é possível devido ao pacote SVGR, que já vem por padrão em um projeto React. Esse pacote permite que utilizemos um SVG como um componente React, assim não precisamos utilizá-lo como uma tag img.
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg' 

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />

      Desenvolvido por Alura.
    </footer>
  )
}

export default Footer