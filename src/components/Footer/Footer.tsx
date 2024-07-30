import { socialNetworkLinks } from "@/constants/rrss";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {socialNetworkLinks.map((entry) => {
        return (
          <a
            key={entry.title}
            href={entry.href}
            className={styles.entry}
            target="_blank"
          >
            <img src={entry.img} />
          </a>
        );
      })}
    </footer>
  );
};

export default Footer;
