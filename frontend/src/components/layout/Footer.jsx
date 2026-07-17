import Container from "../common/Container";
import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <Container>

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <Logo />
            <p className="mt-4 text-slate-400 max-w-sm">
              Chat with your documents using AI.
              Fast, accurate and backed by citations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>Features</li>
              <li>How It Works</li>
              <li>Login</li>
              <li>Signup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Contact
            </h3>

            <p className="text-slate-400">
              support@documind.ai
            </p>
          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-slate-500">
          © 2026 DocuMind. All rights reserved.
        </p>

      </Container>
    </footer>
  );
}