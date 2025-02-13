import { Link, NavLink } from "react-router-dom";
import { forwardRef } from "react";
import { Container } from "../";
import s from "./Header.module.scss";

export const Header = forwardRef((props, ref) => {
  return (
    <header className={s.header} ref={ref}>
      <Container className={s.container}>
        <Link to="/" className={s.logo}>
          <img src="medicine.png" height="30px" width="30px"/>
          <h3 className={s.logo_text}>Nina Petrova's test task</h3>
        </Link>
        <nav className={s.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/history">History</NavLink>
        </nav>
      </Container>
    </header>
  );
});
