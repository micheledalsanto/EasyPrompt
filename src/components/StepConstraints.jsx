import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

function StepConstraints({ constraints, setConstraints, onBack, onNext }) {
  const { dictionary: t } = useContext(LanguageContext);

  return (
    <>
      <label className="block text-sm mb-2">{t.constraintsLabel} ({t.optional})</label>
      <textarea
        value={constraints}
        onChange={(e) => setConstraints(e.target.value)}
        rows="4"
        className="w-full border rounded-lg p-2 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        placeholder={t.constraintsPlaceholder}
      />

      <div className="flex justify-between">
        <button onClick={onBack} className="text-gray-700 dark:text-gray-300 hover:underline">
          ← {t.back}
        </button>
        <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          {t.next}
        </button>
      </div>
    </>
  );
}

export default StepConstraints;
