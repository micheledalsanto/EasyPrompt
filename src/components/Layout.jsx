import React, { useContext, useState } from "react";
import { LanguageContext } from "../i18n/LanguageContext";
import changelog from "../utils/changelog";

function Layout({ currentStep, children, darkMode, setDarkMode }) {
  const isWelcome = currentStep === 0;
  const currentYear = new Date().getFullYear();
  const [showChangelog, setShowChangelog] = useState(false);

  const { language, setLanguage, dictionary } = useContext(LanguageContext);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">EasyPrompt</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            {isWelcome ? dictionary.welcome : `${dictionary.step} ${currentStep} / 5`}
          </span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-sm border rounded px-2 py-1 bg-white dark:bg-gray-700 dark:text-white"
          >
            <option value="it">🇮🇹 IT</option>
            <option value="en">🇬🇧 EN</option>
          </select>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-5xl mx-auto w-full space-y-10">
        {isWelcome ? (
          <div className="text-center text-gray-700 dark:text-gray-100">{children[0]}</div>
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
        <span className="text-sm text-gray-700 dark:text-gray-300 mr-2">🌗 {dictionary.darkMode}</span>
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
        <div>
          © {currentYear} EasyPrompt – ❤️{" "}
          <button
            onClick={() => setShowChangelog(true)}
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            v1.0.3
          </button>
        </div>
        <div>
          {dictionary.createdBy}{" "}
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

      {showChangelog && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 space-y-4 shadow-xl relative">
            <h2 className="text-xl font-semibold text-center text-blue-700 dark:text-blue-300">
              📝 Changelog
            </h2>
            <button
              onClick={() => setShowChangelog(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-red-400 text-lg"
            >
              ✕
            </button>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {changelog.map((entry) => (
                <div key={entry.version}>
                  <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    v{entry.version} – {entry.date}
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
                    {entry.changes[language].map((change, idx) => (
                      <li key={idx}>{change}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
