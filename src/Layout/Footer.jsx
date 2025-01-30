import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p>
          &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
