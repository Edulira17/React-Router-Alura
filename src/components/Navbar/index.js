import Navlinks from '../Navlinks'
import styles from './Navbar.module.css'

const Navbar = () => {

    return (
        <header>
            <nav className={styles.navegacao}>
                <Navlinks to='/'>
                    Home
                </Navlinks>
                <Navlinks to='/about'>
                    Sobre mim
                </Navlinks>
            </nav>
        </header>
    )
}

export default Navbar