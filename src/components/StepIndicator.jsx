function StepIndicator({ currentStep }) {
    const adjustedStep = currentStep === 0 ? null : currentStep;
    const totalSteps = 5;
  
    if (!adjustedStep) return null;
  
    if (adjustedStep === totalSteps) {
      return (
        <div className="text-sm text-center text-green-700 mb-2 font-medium">
          ✅ Completato! Step {totalSteps}/{totalSteps}
        </div>
      );
    }
  
    return (
      <div className="text-sm text-center text-gray-600 mb-2">
        Step {adjustedStep}/{totalSteps}
      </div>
    );
  }
  
  export default StepIndicator;
  