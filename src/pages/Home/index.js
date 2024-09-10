import styles from "./Home.module.css";
import Posts from "components/Posts";
// JSON de posts disponibilizados pela alura:
import posts from "json/posts.json";

const Home = () => {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Posts post={post} />
                </li>
            ))}
        </ul>
    );
};

export default Home;
