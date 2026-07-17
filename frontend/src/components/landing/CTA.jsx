import Button from "../common/Button";
import Container from "../common/Container";

export default function CTA() {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-5xl font-bold">
            Ready to Chat With Your Documents?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Upload your documents and start asking questions in seconds.
            Get AI-powered answers backed by source citations.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button variant="secondary" size="lg">
              Get Started
            </Button>

            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}