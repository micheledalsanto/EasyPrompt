import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

function StepTone({ tone, setTone, onBack, onNext }) {
  const { dictionary: t, language } = useContext(LanguageContext);
  const tones = t.toneOptions;

  return (
    <>
      <label className="block text-sm mb-2">{t.tone}</label>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {tones.map((label) => (
          <button
            key={label}
            onClick={() => setTone(label)}
            className={`px-4 py-2 rounded-lg border text-sm transition-colors duration-150 ease-in-out ${
              tone === label
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-white text-black dark:bg-gray-700 dark:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="text-gray-700 dark:text-gray-300 hover:underline">
          ← {t.back}
        </button>
        {tone && (
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

export default StepTone;
