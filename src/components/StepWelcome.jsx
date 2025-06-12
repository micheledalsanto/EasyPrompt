function StepWelcome({ onStart }) {
  return (
    <div className="text-center max-w-2xl mx-auto py-16 px-4 space-y-6">
      <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400">
        🎉 Benvenuto su EasyPrompt
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        EasyPrompt è il tuo assistente per creare prompt efficaci e precisi in pochi click.
        Segui i passi, personalizza il tuo prompt e usa i tuoi risultati!
      </p>
      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-full shadow"
      >
        🚀 Comincia subito!
      </button>
    </div>
  );
}

export default StepWelcome;
