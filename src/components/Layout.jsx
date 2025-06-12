import React from "react";

function Layout({ currentStep, children, darkMode, setDarkMode }) {
  const isWelcome = currentStep === 0;
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">EasyPrompt</h1>
        <span className="text-sm text-gray-500 dark:text-gray-300">
          {isWelcome ? "Benvenuto" : `Step ${currentStep} / 5`}
        </span>
      </header>

      <main className="flex-1 p-6 max-w-5xl mx-auto w-full space-y-10">
        {isWelcome ? (
          <div className="text-center text-gray-700 dark:text-gray-100">
            {children[0]}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>{children[0]}</div>
              <div>{children[1]}</div>
            </div>
            <div>{children[2]}</div>
          </>
        )}
      </main>

      <div className="flex justify-center items-center mt-4 mb-2">
        <span className="text-sm text-gray-700 dark:text-gray-300 mr-2">🌗 Dark Mode</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 relative" />
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full dark:bg-gray-300" />
        </label>
      </div>

      <footer className="text-center text-xs text-gray-500 dark:text-gray-400 p-4 space-y-1">
        <div>© {currentYear} EasyPrompt – ❤️ v1.0.2</div>
        <div>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/micheledalsanto"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            Michele Dal Santo
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/micheledalsanto"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            GitHub Repo
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
