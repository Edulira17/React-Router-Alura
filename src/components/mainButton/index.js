import styles from './mainButton.module.css'

const mainButton = ({children, tamanho}) => {
  return (
    <button className={`${styles.mainButton} ${styles[tamanho]}`}>
      {children}
    </button>
  )
}

export default mainButton