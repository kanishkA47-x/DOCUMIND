import Button from "../common/Button";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="flex flex-col items-center text-center">

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
            AI Powered Knowledge Assistant
          </span>

          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight max-w-4xl">
            Chat With Your Documents
            <span className="text-blue-600"> Using AI</span>
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-2xl">
            Upload PDFs, notes and reports. Ask questions in
            natural language and receive accurate answers
            with source citations.
          </p>

          <div className="flex gap-4 mt-10">
            <Button size="lg">
              Get Started
            </Button>

            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}