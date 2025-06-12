import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

function StepWelcome({ onStart }) {
  const { dictionary: t } = useContext(LanguageContext);

  return (
    <div className="text-center max-w-2xl mx-auto py-16 px-4 space-y-6">
      <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400">
        🎉 {t.welcomeTitle}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        {t.welcomeDescription}
      </p>
      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-full shadow"
      >
        🚀 {t.startNow}
      </button>
    </div>
  );
}

export default StepWelcome;
