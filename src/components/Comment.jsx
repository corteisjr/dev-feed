import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media.licdn.com/dms/image/v2/D4E03AQGPCdkxcHNoYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1672492101503?e=1746057600&v=beta&t=qHy6OQZB84APvrdh1w3qj_ke1VBUIozDgtUMn4ISW4M"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Corteis Junior</strong>
              <time
                title="27 de Fevereiro de 2025"
                dateTime="2025-02-27  19:16:42"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            officiis soluta, velit tempora vitae amet? Id atque asperiores
            magni, officiis neque maiores quae amet consequuntur perferendis
            nihil reiciendis numquam tenetur?
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
