import { Header } from "./components/Header";
import { Post } from "./Posts";
import "./global.css";
import styles from "./App.module.css";
import { SideBar } from "./components/SideBar";

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
