function StepWelcome({ onStart }) {
  return (
    <div className='text-center max-w-2xl mx-auto py-16 px-4 space-y-6'>
      <h2 className='text-4xl font-bold text-blue-700'>🎉 Benvenuto su EasyPrompt</h2>
      <p className='text-gray-700 text-lg'>
        EasyPrompt è il tuo assistente per creare prompt perfetti anche se non sei un esperto. Rispondi a qualche domanda e otterrai un prompt personalizzato, pronto da usare!
      </p>
      <button
        onClick={onStart}
        className='bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-full transition shadow'
      >
        🚀 Comincia subito!
      </button>
    </div>
  );
}

export default StepWelcome;