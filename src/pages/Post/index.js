import "./post.css";
import styles from './Post.module.css'
import {  useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import NotFound from "pages/NotFound";
import PageDefault from "components/PageDefault";
import PostCard from "components/PostCard";

const Post = () => {
  const parametros = useParams();

  // Percorre o JSON (posts) e retorna o primeiro elemento que satisfaz a condição estabelecida no retorno da função:
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  // Tratativa para caso o retorno da função seja undefined:
  if (!post) {
    return <NotFound />;
  }

  // Posts recomendados
  // Filtrando, ordenando em ordem crescente e extraindo apenas 4 elementos: 
  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    // Utilizando um método alternativo usando (children):

    <PageDefault>
      <PostModel
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>

        <h2 className={styles.tituloOutrosPosts}>
            Outros posts que você pode gostar:
        </h2>

        <ul className={styles.postsRecomendados}>
            {postsRecomendados.map((post) => (
                <li key={post.id}> 
                    <PostCard post={post}/>
                </li>
            ))}
        </ul>
      </PostModel>
    </PageDefault>

  );
};

export default Post;
