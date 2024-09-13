import styles from './NotFound.module.css'
import erro404 from 'assets/erro_404.png'
import Button from 'components/mainButton'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    // O useNavigate retorna uma função chamada navigate. Quando você chama essa função, ela redireciona o usuário para outra página da sua aplicação.
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
                    <Button tamanho="lg">
                        Voltar
                    </Button>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt='Cachorro de óculos e vestido de humano.'

                />
            </div>

            <div className={styles.espacoEmBranco}></div>
        </>
    )
}

export default NotFound