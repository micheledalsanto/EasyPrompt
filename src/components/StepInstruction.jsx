import React, { useState } from "react";

const techniques = {
  few: {
    label: "Few‑Shot",
    guide: `Fornisci 1‑2 esempi completi per mostrare all'AI cosa fare. Es.:\n\nInput: “Qual è la capitale dell’Italia?”\nOutput: “Roma”`,
    placeholder: `Es. Input: “Qual è la capitale dell’Italia?”\nOutput: “Roma”`,
  },
  cot: {
    label: "Chain‑of‑Thought",
    guide: `Invita l’AI a ragionare passo‑passo. Es.:\n\n"Inizia pensando ad alta voce per spiegare il tuo ragionamento."`,
    placeholder: `Es. Spiega passo‑passo come si calcola l’area di un triangolo...`,
  },
  zero: {
    label: "Zero‑Shot",
    guide: `Fornisci solo l'istruzione, senza esempi. L’AI deduce il compito. Es.:\n\n"Riassumi questo testo in una frase."`,
    placeholder: `Es. Riassumi questo testo in una frase.`,
  },
  reflexion: {
    label: "Reflexion",
    guide: `Chiedi all’AI di rivalutare o migliorare una risposta. Es.:\n\n"Rileggi la tua risposta e correggi eventuali errori."`,
    placeholder: `Es. Rileggi la tua risposta e suggerisci miglioramenti.`,
  },
  reAct: {
    label: "ReAct",
    guide: `Combina ragionamento e azioni. Es.:\n\n"Pensa a quale informazione ti serve, simula un’azione, poi riflessione sul risultato."`,
    placeholder: `Es. Ragiona su cosa serve per risolvere un mistero, poi agisci di conseguenza.`,
  },
  multi: {
    label: "Multi‑turn",
    guide: `Scomponi un compito complesso in più fasi. Es.:\n\n"Per prima cosa spiega il contesto. Poi affronta ogni punto uno alla volta."`,
    placeholder: `Es. Guida passo-passo alla stesura di un business plan.`,
  },
};

function StepInstruction({ instruction, setInstruction, onBack, onNext }) {
  const [tech, setTech] = useState(null);

  return (
    <>
      <label className="block text-sm font-medium mb-2">Tecnica di prompting</label>
      <div className="flex flex-wrap gap-2 mb-4">
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
