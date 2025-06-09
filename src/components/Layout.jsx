function Layout({ currentStep, children }) {
    const isWelcome = currentStep === 0;
    const currentYear = new Date().getFullYear();
  
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">EasyPrompt</h1>
          <span className="text-sm text-gray-500">
            {isWelcome ? "Benvenuto" : `Step ${currentStep} / 5`}
          </span>
        </header>
  
        <main className="flex-1 p-6 max-w-5xl mx-auto w-full space-y-10">
          {isWelcome ? (
            <div>{children[0]}</div>
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
  
        <footer className="text-center text-xs text-gray-500 p-4 space-y-1">
          <div>© {currentYear} EasyPrompt – ❤️</div>
          <div>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/micheledalsanto"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              Michele Dal Santo
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/micheledalsanto"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              GitHub Repo
            </a>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Layout;
  