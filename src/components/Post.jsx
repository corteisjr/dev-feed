import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://media.licdn.com/dms/image/v2/D4E03AQGPCdkxcHNoYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1672492101503?e=1746057600&v=beta&t=qHy6OQZB84APvrdh1w3qj_ke1VBUIozDgtUMn4ISW4M"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Corteis Junior</strong>
            <span>FullStack Developer</span>
          </div>
        </div>
        <time title="27 de Fevereiro de 2025" dateTime="2025-02-27  19:16:42">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifólio.</p>
        <p>
          É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do
          projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>{" "}
        </p>{" "}
        <a href="#">#novoprojeto #nlw #rocketseat</a>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
