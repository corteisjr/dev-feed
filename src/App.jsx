import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Corteis"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Consequuntur recusandae eveniet eius, temporibus, quas ex fugit nam ipsa voluptatibus quia sequi cumque odio aperiam, voluptates id quasi amet unde qui? "
          />
          <Post
            author="Francisco"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Consequuntur recusandae eveniet eius, temporibus, quas ex fugit nam ipsa voluptatibus quia sequi cumque odio aperiam, voluptates id quasi amet unde qui? "
          />
        </main>
      </div>
    </>
  );
}
