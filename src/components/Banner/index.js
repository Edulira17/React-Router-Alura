import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.Banner}> 
      <div className={styles.apresentacao}>
        <h1 className={styles.title}>
          Olá mundo !
        </h1>

        <p className={styles.paragrafo}>

        </p>
      </div>

    </div>
  )
}

export default Banner