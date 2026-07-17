import Button from "../common/Button";
import Container from "../common/Container";
import Logo from "../common/Logo";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex items-center justify-between h-20">

          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-blue-600">
              Features
            </a>

            <a href="#" className="hover:text-blue-600">
              How it Works
            </a>

            <a href="#" className="hover:text-blue-600">
              Pricing
            </a>
          </nav>

          <div className="flex gap-3">
            <Button variant="secondary">
              Login
            </Button>

            <Button>
              Get Started
            </Button>
          </div>

        </div>
      </Container>
    </header>
  );
}