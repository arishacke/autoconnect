import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Useronlinelive.
              </a>
            </span>
          </h1>

          <p className={styles.description}>
            Get started by connecting your desired network
          </p>

          <div className={styles.connect}>
            <ConnectWallet />
          </div>
        </div>
        </div>
    </main>
  );
};

export default Home;
