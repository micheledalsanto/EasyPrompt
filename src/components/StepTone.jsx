const tones = ["Professionale","Empatico","Divertente","Neutro","Creativo"];

function StepTone({ tone, setTone, onBack, onNext }) {
  return (
    <>
      <label className="block text-sm mb-2">Tono</label>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {tones.map(t => (
          <button
            key={t}
            onClick={() => setTone(t)}
            className={`px-4 py-2 rounded-lg border ${tone===t ? 'bg-blue-600 text-white' : 'bg-white'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button onClick={onBack}>← Indietro</button>
        {tone && <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Avanti →</button>}
      </div>
    </>
  );
}

export default StepTone;
