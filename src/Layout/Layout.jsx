import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import Container from "react-bootstrap/Container";

export default function Layout() {
  return (
    <>
      <Header />
      <Container className="my-5 main-container">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
