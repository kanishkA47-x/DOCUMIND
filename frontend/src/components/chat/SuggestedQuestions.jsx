export default function SuggestedQuestions({ onSelect }) {

  const questions = [

    "Summarize this document",

    "What are the key points?",

    "Give me important dates",

    "Explain this in simple words"

  ];

  return (

    <div className="flex flex-wrap gap-3">

      {questions.map((question)=>(

        <button
          key={question}
          onClick={()=>onSelect(question)}
          className="bg-white shadow rounded-full px-4 py-2 hover:bg-slate-100 transition"
        >
          {question}
        </button>

      ))}

    </div>

  );
}