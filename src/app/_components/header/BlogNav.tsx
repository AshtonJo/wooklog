"use client";

import styles from "@/app/_components/header/blogNav.module.css";
import Image from "next/image";
import Link from "next/link";
import gitIcon from "@/public/github-mark.svg";
import blogIcon from "@/public/blog-svgrepo-com.svg";
import mimoIcon from "@/public/미모티콘.png";

interface BlogNavStyles {
  isHome?: boolean;
  isPost?: boolean;
  post?: any;
}

export default function BlogNav() {
  return (
    <>
      <nav className={styles.NavBar}>
        <div className={styles.LeftContentsBox}>
          <div>
            <ul className={styles.LeftContents}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About-Me</Link>
              </li>
              <li>
                <Link href="/project">My-Project</Link>
              </li>
              <li>
                <Link href="/til">TIL</Link>
              </li>
              <li>
                <Link href="/retro">회고</Link>
              </li>
              <li>
                <Link href="/javascript">JavaScript</Link>
              </li>
              <li>
                <Link href="/typescript">TypeScript</Link>
              </li>
              <li>
                <Link href="/css">Css</Link>
              </li>
              <li>
                <Link href="/react">React</Link>
              </li>
              <li>
                <Link href="/cs">CS</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.RightContentsBox}>
          <div className={styles.RightIcon}>
            <Link
              href="https://github.com/AshtonJo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={gitIcon} alt="private git icon" />
            </Link>
          </div>
          <div className={styles.RightIcon}>
            <Link
              href="https://velog.io/@ash98/posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={blogIcon} alt="private velog icon" />
            </Link>
          </div>
        </div>
      </nav>
      <div className={styles.title}>
        <div>
          <Image src={mimoIcon} alt="내 소개를 위한 미모티콘" />
        </div>
        <div className={styles.rightTitle}>WookHee Dev-Blog</div>
      </div>
    </>
  );
}
