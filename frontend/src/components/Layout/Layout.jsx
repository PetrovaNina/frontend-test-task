import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout = (props) => {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>{props.children}</main>
      <Footer />
    </>
  );
};
