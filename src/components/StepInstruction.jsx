import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

const techniques = {
  few: {
    label: "Few‑Shot",
    guide_it: `Fornisci 1‑2 esempi completi per mostrare all'AI cosa fare. Es.:\n\nInput: “Qual è la capitale dell’Italia?”\nOutput: “Roma”`,
    guide_en: `Give 1‑2 complete examples to show the AI what to do. E.g.:\n\nInput: “What is the capital of Italy?”\nOutput: “Rome”`,
    placeholder_it: "Es. Input: Qual è 2+2?\nOutput: 4",
    placeholder_en: "E.g. Input: What is 2+2?\nOutput: 4",
  },
  cot: {
    label: "Chain‑of‑Thought",
    guide_it: `Invita l’AI a ragionare passo‑passo. Es.:\n\n"Inizia pensando ad alta voce per spiegare il tuo ragionamento."`,
    guide_en: `Encourage the AI to reason step‑by‑step. E.g.:\n\n"Start by thinking aloud to explain your reasoning."`,
    placeholder_it: "Es. Spiega passo-passo come calcolare l'area di un cerchio...",
    placeholder_en: "E.g. Explain step-by-step how to calculate the area of a circle...",
  },
  zero: {
    label: "Zero‑Shot",
    guide_it: `Fornisci solo l'istruzione, senza esempi. Es.:\n\n"Riassumi questo testo in una frase."`,
    guide_en: `Provide only the instruction, no examples. E.g.:\n\n"Summarize this text in one sentence."`,
    placeholder_it: "Es. Riassumi questo testo in una frase...",
    placeholder_en: "E.g. Summarize this text in one sentence...",
  },
  reflexion: {
    label: "Reflexion",
    guide_it: `Chiedi all’AI di rivalutare o migliorare una risposta. Es.:\n\n"Rileggi la tua risposta e correggi eventuali errori."`,
    guide_en: `Ask the AI to reassess or improve an answer. E.g.:\n\n"Review your response and fix any mistakes."`,
    placeholder_it: "Es. Rileggi la risposta e migliora la chiarezza",
    placeholder_en: "E.g. Review the answer and improve clarity",
  },
  reAct: {
    label: "ReAct",
    guide_it: `Combina ragionamento e azioni. Es.:\n\n"Pensa a quale informazione ti serve, simula un’azione, poi rifletti sul risultato."`,
    guide_en: `Combine reasoning and actions. E.g.:\n\n"Think about what info you need, simulate an action, then reflect."`,
    placeholder_it: "Es. Trova il miglior volo, poi valuta il prezzo",
    placeholder_en: "E.g. Find the best flight, then evaluate the price",
  },
  multi: {
    label: "Multi‑turn",
    guide_it: `Scomponi un compito complesso in più fasi. Es.:\n\n"Per prima cosa spiega il contesto. Poi affronta ogni punto uno alla volta."`,
    guide_en: `Break a complex task into multiple steps. E.g.:\n\n"First explain the context. Then address each point one by one."`,
    placeholder_it: "Es. Spiega il contesto di un evento, poi analizza ogni aspetto",
    placeholder_en: "E.g. Explain the context of an event, then analyze each aspect",
  },
};

function StepInstruction({ instruction, setInstruction, onBack, onNext, suggestedTechnique, roleUseCase }) {
  const [tech, setTech] = useState(null);
  const { dictionary: t, language } = useContext(LanguageContext);

  useEffect(() => {
    if (suggestedTechnique) {
      setTech(suggestedTechnique);
    }
  }, [suggestedTechnique]);

  return (
    <>
      <label className="block text-sm font-medium mb-2">{t.promptTechnique}</label>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(techniques).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setTech(key)}
            className={`px-4 py-2 rounded-lg border transition text-sm relative
              ${
                tech === key
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-white dark:bg-gray-700 text-black dark:text-white"
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
        <p className="text-xs text-gray-500 dark:text-gray-300 mb-2">
          ⭐ {t.techniqueSuggested}: <strong>{techniques[suggestedTechnique].label}</strong>
        </p>
      )}

      {tech && (
        <div className="mb-4 space-y-2">
          <div className="p-3 bg-gray-50 dark:bg-gray-800 border rounded-lg text-sm text-gray-700 dark:text-gray-200 whitespace-pre-wrap">
            {techniques[tech][`guide_${language}`]}
          </div>
          <p className="text-sm italic text-gray-600 dark:text-gray-400">
            ✏️ {t.instructionNote}
          </p>
        </div>
      )}

      {roleUseCase && (
        <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg text-sm text-yellow-900 dark:text-yellow-100">
          <div className="mb-2">
            💡 <strong>{t.rolePromptExample}</strong> {roleUseCase}
          </div>
          <button
            onClick={() => setInstruction(roleUseCase)}
            className="text-xs px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white border border-blue-300 dark:border-blue-500 hover:bg-blue-200 dark:hover:bg-blue-500 transition"
          >
            ✨ {t.useExample}
          </button>
        </div>
      )}

      {tech && (
        <>
          <label className="block text-sm mb-1">
            {t.instructionLabel} <strong>{techniques[tech].label}</strong>
          </label>
          <textarea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            rows="5"
            className="w-full border rounded-lg p-2 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            placeholder={techniques[tech][`placeholder_${language}`]}
          />
        </>
      )}

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          ← {t.back}
        </button>
        {tech && instruction.trim() && (
          <button
            onClick={onNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            {t.next}
          </button>
        )}
      </div>
    </>
  );
}

export default StepInstruction;
