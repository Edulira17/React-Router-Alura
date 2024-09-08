import Banner from "components/Banner"
import styles from './Home.module.css'
// JSON de posts disponibilizados pela alura:
import posts from 'json/posts.json'

const Home = () => {
    return (
        <main>
            <Banner />
            
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        Post..
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Home