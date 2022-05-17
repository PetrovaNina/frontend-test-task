import { useEffect, useState, useRef } from "react";
import { Container } from "./Container/Container";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

import s from "./Layout.module.scss";

export const Layout = (props) => {
  const headerRef = useRef();
  const [headerHeigth, setHeaderHeigth] = useState();

  useEffect(() => {
    headerRef.current && setHeaderHeigth(headerRef.current.offsetHeight);
  }, [headerRef.current]);

  return (
    <>
      <Header ref={headerRef} />
      <Container className={s.main} style={{ marginTop: headerHeigth }}>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </>
  );
};
