import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://media.licdn.com/dms/image/v2/D4E03AQGPCdkxcHNoYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1672492101503?e=1746057600&v=beta&t=qHy6OQZB84APvrdh1w3qj_ke1VBUIozDgtUMn4ISW4M"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}></div>
      </div>
    </div>
  );
}
