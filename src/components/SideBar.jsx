import { PencilLine } from "phosphor-react";

import styles from "./SideBar.module.css";
import { Avatar } from "./Avatar";

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQGPCdkxcHNoYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1672492101503?e=1746057600&v=beta&t=qHy6OQZB84APvrdh1w3qj_ke1VBUIozDgtUMn4ISW4M" />
        <strong>Corteis Junior</strong>
        <span>FullStack Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
