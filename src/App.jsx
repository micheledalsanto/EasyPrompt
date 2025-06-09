import { useState } from "react";
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
import { stepGuides } from "./utils/stepGuides";
import Toast from "./components/Toast"; // <--- importa il nuovo componente

function App() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("");
  const [instruction, setInstruction] = useState("");
  const [tone, setTone] = useState("");
  const [constraints, setConstraints] = useState("");
  const [toast, setToast] = useState(null); // <--- stato per toast

  const prompt = generatePrompt({
    role,
    instruction,
    tone,
    constraints,
  });

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const reset = () => {
    setStep(0);
    setRole("");
    setInstruction("");
    setTone("");
    setConstraints("");
  };

  const getStepComponent = () => {
    switch (step) {
      case 0:
        return [<StepWelcome onStart={() => setStep(1)} />];

      case 1:
        return [
          <StepRole role={role} setRole={setRole} onNext={() => setStep(2)} />,
          <div className="bg-gray-100 border rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">🧭 Guida allo Step</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{stepGuides[step]}</p>
          </div>,
          <PromptPreview prompt={prompt} />,
        ];

      case 2:
        return [
          <StepInstruction
            instruction={instruction}
            setInstruction={setInstruction}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />,
          <div className="bg-gray-100 border rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">🧭 Guida allo Step</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{stepGuides[step]}</p>
          </div>,
          <PromptPreview prompt={prompt} />,
        ];

      case 3:
        return [
          <StepTone
            tone={tone}
            setTone={setTone}
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
          />,
          <div className="bg-gray-100 border rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">🧭 Guida allo Step</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{stepGuides[step]}</p>
          </div>,
          <PromptPreview prompt={prompt} />,
        ];

      case 4:
        return [
          <StepConstraints
            constraints={constraints}
            setConstraints={setConstraints}
            onBack={() => setStep(3)}
            onNext={() => setStep(5)}
          />,
          <div className="bg-gray-100 border rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">🧭 Guida allo Step</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{stepGuides[step]}</p>
          </div>,
          <PromptPreview prompt={prompt} />,
        ];

      case 5:
        return [
          <div className="text-center space-y-4">
            <p className="text-lg font-semibold">🎯 Prompt completato!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
                onClick={() => {
                  navigator.clipboard.writeText(prompt);
                  showToast("✅ Prompt copiato negli appunti!");
                }}
              >
                📋 Copia Prompt
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition"
                onClick={() => downloadPrompt(prompt)}
              >
                💾 Scarica Prompt
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-lg transition"
                onClick={reset}
              >
                🔁 Ricomincia
              </button>
            </div>
          </div>,
          <div className="bg-gray-100 border rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">🧭 Guida allo Step</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{stepGuides[step]}</p>
          </div>,
          <PromptPreview prompt={prompt} />,
        ];

      default:
        return [<p>Step non riconosciuto</p>];
    }
  };

  return (
    <>
      <Layout currentStep={step}>
        {getStepComponent()}
      </Layout>
      {toast && <Toast message={toast} />}
    </>
  );
}

export default App;
