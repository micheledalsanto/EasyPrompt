function StepConstraints({ constraints, setConstraints, onBack, onNext }) {
    return (
      <>
        <label className="block text-sm mb-2">Vincoli (opzionale)</label>
        <textarea
          value={constraints}
          onChange={e => setConstraints(e.target.value)}
          rows="4"
          className="w-full border rounded-lg p-2 mb-4"
          placeholder="Es: massimo 100 parole..."
        />
  
        <div className="flex justify-between">
          <button onClick={onBack}>← Indietro</button>
          <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Avanti →</button>
        </div>
      </>
    );
  }
  
  export default StepConstraints;
  