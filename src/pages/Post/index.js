import './post.css'
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import posts from 'json/posts.json'
import PostModel from "components/PostModel"

const Post = () => {
    const parametros = useParams()

    // Percorre o JSON (posts) e retorna o primeiro elemento que satisfaz a condição estabelecida no retorno da função:
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    // Tratativa para caso o retorno da função seja undefined:
    if(!post) {
        return <h1>Post não encontrado...</h1>
    }
    return (
        <PostModel fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModel>
    )
}

export default Post