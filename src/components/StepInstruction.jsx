import React, { useState, useEffect } from "react";

const techniques = {
  few: {
    label: "Few‑Shot",
    guide: `Fornisci 1‑2 esempi completi per mostrare all'AI cosa fare. Es.:\n\nInput: “Qual è la capitale dell’Italia?”\nOutput: “Roma”`,
    placeholder: "Es. Input: Qual è 2+2?\nOutput: 4",
  },
  cot: {
    label: "Chain‑of‑Thought",
    guide: `Invita l’AI a ragionare passo‑passo. Es.:\n\n\"Inizia pensando ad alta voce per spiegare il tuo ragionamento.\"`,
    placeholder: "Es. Spiega passo-passo come calcolare l'area di un cerchio...",
  },
  zero: {
    label: "Zero‑Shot",
    guide: `Fornisci solo l'istruzione, senza esempi. Es.:\n\n\"Riassumi questo testo in una frase.\"`,
    placeholder: "Es. Riassumi questo testo in una frase...",
  },
  reflexion: {
    label: "Reflexion",
    guide: `Chiedi all’AI di rivalutare o migliorare una risposta. Es.:\n\n\"Rileggi la tua risposta e correggi eventuali errori.\"`,
    placeholder: "Es. Rileggi la risposta e migliora la chiarezza",
  },
  reAct: {
    label: "ReAct",
    guide: `Combina ragionamento e azioni. Es.:\n\n\"Pensa a quale informazione ti serve, simula un’azione, poi rifletti sul risultato.\"`,
    placeholder: "Es. Trova il miglior volo, poi valuta il prezzo",
  },
  multi: {
    label: "Multi‑turn",
    guide: `Scomponi un compito complesso in più fasi. Es.:\n\n\"Per prima cosa spiega il contesto. Poi affronta ogni punto uno alla volta.\"`,
    placeholder: "Es. Spiega il contesto di un evento, poi analizza ogni aspetto",
  },
};

function StepInstruction({ instruction, setInstruction, onBack, onNext, suggestedTechnique }) {
  const [tech, setTech] = useState(null);

  useEffect(() => {
    if (suggestedTechnique) {
      setTech(suggestedTechnique);
    }
  }, [suggestedTechnique]);

  return (
    <>
      <label className="block text-sm font-medium mb-2">Tecnica di prompting</label>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(techniques).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setTech(key)}
            className={`px-4 py-2 rounded-lg border transition text-sm relative ${
              tech === key ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            {label}
            {suggestedTechnique === key && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs px-2 py-0.5 rounded-full">
                ⭐
              </span>
            )}
          </button>
        ))}
      </div>

      {suggestedTechnique && (
        <p className="text-xs text-gray-500 mb-2">
          ⭐ Tecnica consigliata per il ruolo selezionato
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
