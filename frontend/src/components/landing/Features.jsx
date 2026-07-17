import Container from "../common/Container";

const features = [
  {
    title: "Upload Documents",
    description:
      "Upload PDFs, notes, research papers, and reports in seconds.",
    icon: "📄",
  },
  {
    title: "Ask Questions",
    description:
      "Ask anything in natural language and get accurate responses.",
    icon: "💬",
  },
  {
    title: "Source Citations",
    description:
      "Every answer includes references from your uploaded documents.",
    icon: "📚",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose DocuMind?
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need to interact with your documents using AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}