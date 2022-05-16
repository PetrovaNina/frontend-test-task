import { Container } from "../";
import s from "./Footer.module.scss";


import email from "../../../images/icons/email.svg";
import github from "../../../images/icons/github.svg";
import linkedin from "../../../images/icons/linkedin.svg";
import telegram from "../../../images/icons/telegram.svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container className={s.container}>
        <p>Nina Petrova, 2022</p>
        <nav className={s.nav}>
          <a  className={s.nav_cv} href="https://drive.google.com/file/d/15KdQnEaTUfwPlSXsy8EciG_WhZfNp5aP/view" target="_blank">
            <span>Resume</span>
          </a>
          <a href="mailto:nina.frontend@gmail.com" target="_blank">
            <span className={s.nav_text}>Email</span>
            <img className={s.nav_icon} src={email} alt="send email" />
          </a>
          <a href="https://github.com/PetrovaNina" target="_blank">
            <span className={s.nav_text}>GitHub</span>
            <img className={s.nav_icon} src={github} alt="gitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/nina-petrova-frontend"
            target="_blank"
          >
            <span className={s.nav_text}>Linkedin</span>
            <img className={s.nav_icon} src={linkedin} alt="linkedin" />
          </a>
          <a href="https://t.me/NinaAPetrova" target="_blank">
            <span className={s.nav_text}>Telegram</span>
            <img className={s.nav_icon} src={telegram} alt="telegram" />
          </a>
        </nav>
      </Container>
    </footer>
  );
};
