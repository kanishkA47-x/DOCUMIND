import Container from "../common/Container";

const steps = [
  {
    number: "01",
    title: "Upload Documents",
    description:
      "Upload PDFs, notes, reports or research papers securely.",
  },
  {
    number: "02",
    title: "AI Processes Content",
    description:
      "Our AI indexes and understands your documents for accurate retrieval.",
  },
  {
    number: "03",
    title: "Ask Questions",
    description:
      "Chat naturally with your documents and receive answers with citations.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <p className="text-gray-600 mt-4">
            Three simple steps to chat with your documents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => (

            <div
              key={step.number}
              className="bg-white rounded-2xl shadow-sm border p-8"
            >

              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}