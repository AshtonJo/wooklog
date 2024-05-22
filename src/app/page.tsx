import Footer from "./_components/Footer";
import styles from "./page.module.css";
import BlogNav from "@/app/_components/header/BlogNav";

export default function Home() {
  return (
    <div className={styles.container}>
      <BlogNav />
      <main className={styles.main}>
        <div></div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
