import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Header as SuirHeader } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faTumblrSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  type Language,
  languages,
  useI18N,
} from "@webclient/shared/i18n";
import { Joiner } from "@webclient/shared/react/joiner";
import { ThemeSwitcher } from "./theme-switcher";
import styles from "./header.module.css";

interface HeaderProps {
  lang: Language;
}

const LanguageSwitcher = function LanguageSwitcher(props: HeaderProps) {
  return (
    <Joiner
      arr={languages.filter((language) => language.code !== props.lang?.code)}
      renderer={(lang) => (
        <Link key={lang.code} href={`/${lang.code}/`}>
          <a>{lang.name}</a>
        </Link>
      )}
      separator={" | "}
    />
  );
};

const Header = (props: HeaderProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { t } = useI18N(props.lang.code);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <header className={styles["page-header"]}>
      <SuirHeader as="h1">
        <Link href={`/${props.lang.code}/`}>Eser Ozvataf</Link>
      </SuirHeader>
      <p>{t("A technical generalist in consulting")}</p>
      <div className={styles["follow-icons"]}>
        <a aria-label="Youtube" href="https://youtube.com/EserOzvataf">
          <FontAwesomeIcon size="2x" icon={faYoutubeSquare} />
        </a>
        <a aria-label="GitHub" href="https://github.com/eserozvataf">
          <FontAwesomeIcon size="2x" icon={faGithubSquare} />
        </a>
        <a aria-label="Twitter" href="https://twitter.com/eserozvataf">
          <FontAwesomeIcon size="2x" icon={faTwitterSquare} />
        </a>
        <a aria-label="Hashnode" href="https://eser.hashnode.dev/">
          <FontAwesomeIcon size="2x" icon={faTumblrSquare} />
        </a>
        <a aria-label="LinkedIn" href="https://linkedin.com/in/eserozvataf">
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </a>
        {/* <a aria-label="Telegram" href="https://telegram.me/esero"><FontAwesomeIcon size="2x" icon={faTelegramPlane} /></a> */}
        {
          /* <a aria-label="E-Mail" href="mailto:eser@ozvataf.com">
          <FontAwesomeIcon size="2x" icon={faEnvelopeSquare} />
        </a> */
        }
      </div>

      <h2>
        <Link href={`/${props.lang.code}/`}>{t("Frontpage")}</Link>
      </h2>
      <h2>
        <Link href={`/${props.lang.code}/stories/`}>{t("Stories")}</Link>
      </h2>
      <h2>
        <Link href={`/${props.lang.code}/speaking/`}>{t("Speaking")}</Link>
      </h2>
      <h2>
        <Link href={`/${props.lang.code}/cv/`}>{t("Curriculum Vitae")}</Link>
      </h2>
      <h2>
        <Link href={`/${props.lang.code}/portfolio/`}>{t("Portfolio")}</Link>
      </h2>
      <h5>
        <LanguageSwitcher {...props} />
      </h5>
    </header>
  );
};

export { Header, Header as default };
