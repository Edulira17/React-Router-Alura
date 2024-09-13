import styles from './PostModel.module.css'

const PostModel = ({fotoCapa, titulo, children}) => {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>
j
            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>

        </article>
    )
}

export default PostModel