import React, { useState } from "react";

const techniques = {
  few: {
    label: "Few‑Shot",
    guide: `In questa tecnica fornisci 1‑2 esempi completi. Es.:
  
Input: “Qual è la capitale dell’Italia?”
Output: “Roma”

Poi scrivi l'istruzione desiderata con un esempio simile.`,
  },
  cot: {
    label: "Chain‑of‑Thought",
    guide: `Invita l’AI a ragionare passo‑passo. Es.:

“Inizia pensando ad alta voce per spiegare come risolveresti il problema.”`,
  },
};

function StepInstruction({ instruction, setInstruction, onBack, onNext }) {
  const [tech, setTech] = useState(null);

  return (
    <>
      <label className="block text-sm font-medium mb-2">Tecnica di prompting</label>
      <div className="flex gap-4 mb-4">
        {Object.entries(techniques).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setTech(key)}
            className={`px-4 py-2 rounded-lg border transition ${
              tech === key ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tech && (
        <div className="mb-4 p-3 bg-gray-50 border rounded-lg text-sm text-gray-700 whitespace-pre-wrap">
          {techniques[tech].guide}
        </div>
      )}

      {tech && (
        <>
          <label className="block text-sm mb-1">
            Istruzione (basata su <strong>{techniques[tech].label}</strong>)
          </label>
          <textarea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            rows="5"
            className="w-full border rounded-lg p-2 mb-4"
            placeholder="Es. Scrivi una spiegazione passo-passo su come si calcola l'area di un triangolo..."
          />
        </>
      )}

      <div className="flex justify-between">
        <button onClick={onBack} className="text-gray-700">
          ← Indietro
        </button>
        {tech && instruction.trim() && (
          <button
            onClick={onNext}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Avanti →
          </button>
        )}
      </div>
    </>
  );
}

export default StepInstruction;
