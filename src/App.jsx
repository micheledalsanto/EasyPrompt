import { useState, useEffect, useContext } from "react";
import Layout from "./components/Layout";
import StepWelcome from "./components/StepWelcome";
import StepIndicator from "./components/StepIndicator";
import StepRole from "./components/StepRole";
import StepInstruction from "./components/StepInstruction";
import StepTone from "./components/StepTone";
import StepConstraints from "./components/StepConstraints";
import PromptPreview from "./components/PromptPreview";
import { generatePrompt } from "./utils/generatePrompt";
import { downloadPrompt } from "./utils/downloadPrompt";
import stepGuides from "./utils/stepGuides";
import { roleTechniques } from "./utils/roleTechniques";
import { suggestionsByRole } from "./utils/suggestionsByRole";
import { LanguageContext } from "./i18n/LanguageContext";

function App() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("");
  const [instruction, setInstruction] = useState("");
  const [tone, setTone] = useState("");
  const [constraints, setConstraints] = useState("");
  const [suggestedTechnique, setSuggestedTechnique] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const { dictionary: t, language } = useContext(LanguageContext);

  const prompt = generatePrompt({
    role,
    instruction,
    tone,
    constraints,
    t,
  });

  const reset = () => {
    setStep(0);
    setRole("");
    setInstruction("");
    setTone("");
    setConstraints("");
    setSuggestedTechnique(null);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const getStepComponent = () => {
    const GuideBox = (
      <div className="bg-gray-100 dark:bg-gray-800 border rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          🧭 {t.stepGuide.title}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
          {stepGuides[language][step]}
        </p>
      </div>
    );

    switch (step) {
      case 0:
        return [<StepWelcome onStart={() => setStep(1)} key="welcome" />];

      case 1:
        return [
          <StepRole
            key="role"
            role={role}
            setRole={(value) => {
              setRole(value);
              setSuggestedTechnique(roleTechniques[value] || null);
            }}
            onNext={() => setStep(2)}
          />,
          GuideBox,
          <PromptPreview key="preview" prompt={prompt} />,
        ];

      case 2:
        return [
          <StepInstruction
            key="instruction"
            instruction={instruction}
            setInstruction={setInstruction}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
            suggestedTechnique={suggestedTechnique}
            role={role}
            roleUseCase={suggestionsByRole[role]}
          />,
          GuideBox,
          <PromptPreview key="preview" prompt={prompt} />,
        ];

      case 3:
        return [
          <StepTone
            key="tone"
            tone={tone}
            setTone={setTone}
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
          />,
          GuideBox,
          <PromptPreview key="preview" prompt={prompt} />,
        ];

      case 4:
        return [
          <StepConstraints
            key="constraints"
            constraints={constraints}
            setConstraints={setConstraints}
            onBack={() => setStep(3)}
            onNext={() => setStep(5)}
          />,
          GuideBox,
          <PromptPreview key="preview" prompt={prompt} />,
        ];

      case 5:
        return [
          <div key="complete" className="text-center space-y-4">
            <p className="text-lg font-semibold dark:text-white">
              🎯 {t.complete.title}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
                onClick={() => navigator.clipboard.writeText(prompt)}
              >
                📋 {t.complete.copy}
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition"
                onClick={() => downloadPrompt(prompt)}
              >
                💾 {t.complete.download}
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-lg transition"
                onClick={reset}
              >
                🔁 {t.complete.reset}
              </button>
            </div>
          </div>,
          GuideBox,
          <PromptPreview key="preview" prompt={prompt} />,
        ];

      default:
        return [<p key="unknown">{t.error.unknownStep}</p>];
    }
  };

  return (
    <Layout currentStep={step} darkMode={darkMode} setDarkMode={setDarkMode}>
      {getStepComponent()}
    </Layout>
  );
}

export default App;
