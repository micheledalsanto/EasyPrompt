import React, { useState, useEffect } from "react";
import { roleTechniques } from "../utils/roleTechniques"; // Assicurati che questo file esista

const techniques = {
  few: {
    label: "Few‑Shot",
    guide: `Fornisci 1‑2 esempi completi per mostrare all'AI cosa fare. Es.:
    
Input: “Qual è la capitale dell’Italia?”
Output: “Roma”`,
    placeholder: "Es. Scrivi una descrizione prodotto con un esempio Input/Output...",
  },
  cot: {
    label: "Chain‑of‑Thought",
    guide: `Invita l’AI a ragionare passo‑passo. Es.:

"Inizia pensando ad alta voce per spiegare il tuo ragionamento."`,
    placeholder: "Es. Spiega passo-passo come si calcola l’area di un triangolo...",
  },
  zero: {
    label: "Zero‑Shot",
    guide: `Fornisci solo l'istruzione, senza esempi. L’AI deduce il compito. Es.:

"Riassumi questo testo in una frase."`,
    placeholder: "Es. Scrivi un titolo per questo articolo...",
  },
  reflexion: {
    label: "Reflexion",
    guide: `Chiedi all’AI di rivalutare o migliorare una risposta. Es.:

"Rileggi la tua risposta e correggi eventuali errori."`,
    placeholder: "Es. Migliora la seguente risposta in base a questi criteri...",
  },
  react: {
    label: "ReAct",
    guide: `Combina ragionamento e azioni. Es.:

"Pensa a quale informazione ti serve, simula un’azione, poi rifletti sul risultato."`,
    placeholder: "Es. Risolvi questo problema pensando e agendo passo-passo...",
  },
  multi: {
    label: "Multi‑turn",
    guide: `Scomponi un compito complesso in più fasi. Es.:

"Per prima cosa spiega il contesto. Poi affronta ogni punto uno alla volta."`,
    placeholder: "Es. Spiega i passaggi per creare un business plan...",
  },
};

function StepInstruction({ role, instruction, setInstruction, onBack, onNext }) {
  const [tech, setTech] = useState(null);
  const [suggested, setSuggested] = useState(null);

  useEffect(() => {
    if (role && roleTechniques[role]) {
      setSuggested(roleTechniques[role]);
    }
  }, [role]);

  return (
    <>
      <label className="block text-sm font-medium mb-2">Tecnica di prompting</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {Object.entries(techniques).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setTech(key)}
            className={`px-4 py-2 rounded-lg border transition text-sm ${
              tech === key ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {suggested && !tech && (
        <p className="text-sm text-gray-500 mb-4">
          ✅ Tecnica suggerita per <strong>{role}</strong>:{" "}
          <strong>{techniques[suggested]?.label}</strong>
        </p>
      )}

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
            placeholder={techniques[tech].placeholder}
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
