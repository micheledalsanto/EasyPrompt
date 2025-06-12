import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

function PromptPreview({ prompt }) {
  const { dictionary: t } = useContext(LanguageContext);

  if (!prompt) return null;

  const sections = prompt.split("\n").filter((line) => line.trim() !== "");

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">📄 {t.previewTitle}</h2>

      <div className="text-sm text-gray-700 dark:text-gray-200 space-y-3">
        {sections.map((section, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">»</span>
            <span className="whitespace-pre-line">{section}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-400 italic dark:text-gray-500">
        {t.previewNote}
      </p>
    </div>
  );
}

export default PromptPreview;
