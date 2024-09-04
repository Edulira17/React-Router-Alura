import { NavLink } from "react-router-dom";
import styles from "./Navlinks.module.css";

const Navlinks = ({children, to}) => {

  return (
    // Esse NavLink está aplicando classes de estilo ao link com base em sua ativação, destacando-o quando ele é o link ativo.
   <NavLink className={({isActive}) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ''}
   `} to={to}
      end  
   >
    {children}
   </NavLink>
  );
};

export default Navlinks;
