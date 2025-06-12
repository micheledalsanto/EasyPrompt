const tones = ["Professionale", "Empatico", "Divertente", "Neutro", "Creativo"];

function StepTone({ tone, setTone, onBack, onNext }) {
  return (
    <>
      <label className="block text-sm mb-2">Tono</label>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {tones.map((t) => (
          <button
            key={t}
            onClick={() => setTone(t)}
            className={`px-4 py-2 rounded-lg border text-sm transition-colors duration-150 ease-in-out ${
              tone === t
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-white text-black dark:bg-gray-700 dark:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="text-gray-700 dark:text-gray-300">
          ← Indietro
        </button>
        {tone && (
          <button
            onClick={onNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Avanti →
          </button>
        )}
      </div>
    </>
  );
}

export default StepTone;
