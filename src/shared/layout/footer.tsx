import { type Language } from "@webclient/shared/i18n";
import styles from "./footer.module.css";

interface FooterProps {
  lang: Language;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={styles["page-footer"]}>
      <section>© {new Date().getFullYear()} Eser Ozvataf.</section>
    </footer>
  );
};

export { Footer, Footer as default };
