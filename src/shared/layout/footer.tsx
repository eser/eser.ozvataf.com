import styles from "./footer.module.css";

interface FooterProps {
  lang: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={styles["page-footer"]}>
      <section>© 2020 Eser Ozvataf.</section>
    </footer>
  );
};

export { Footer, Footer as default };
