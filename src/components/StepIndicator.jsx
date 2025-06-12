import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

function StepIndicator({ currentStep }) {
  const { dictionary: t } = useContext(LanguageContext);
  const adjustedStep = currentStep === 0 ? null : currentStep;
  const totalSteps = 5;

  if (!adjustedStep) return null;

  if (adjustedStep === totalSteps) {
    return (
      <div className="text-sm text-center text-green-700 dark:text-green-400 mb-2 font-medium">
        ✅ {t.completed} {totalSteps}/{totalSteps}
      </div>
    );
  }

  return (
    <div className="text-sm text-center text-gray-600 dark:text-gray-300 mb-2">
      {t.step} {adjustedStep}/{totalSteps}
    </div>
  );
}

export default StepIndicator;
