import { Link } from "react-router-dom";
import styles from "./Posts.module.css";
import Button from "components/mainButton";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <Button>
            Ler
        </Button> 
      </div>
    </Link>
  );
};

export default PostCard;
