function PromptPreview({ prompt }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Anteprima Prompt</h2>
      <pre className="whitespace-pre-wrap break-words text-sm text-gray-800">{prompt}</pre>
    </div>
  );
}

export default PromptPreview;
