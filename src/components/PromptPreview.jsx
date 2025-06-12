function PromptPreview({ prompt }) {
  if (!prompt) return null;

  const sections = prompt.split("\n").filter((line) => line.trim() !== "");

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">📄 Anteprima Prompt</h2>

      <div className="text-sm text-gray-700 space-y-3">
        {sections.map((section, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">»</span>
            <span className="whitespace-pre-line">{section}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-400 italic">
        Puoi copiare o scaricare questo prompt nel passo finale.
      </p>
    </div>
  );
}

export default PromptPreview;
