const it = {
    welcome: "Benvenuto",
    darkMode: "Modalità scura",
    createdBy: "Creato da",
  
    // Pagina Welcome
    welcomeTitle: "Benvenuto su EasyPrompt",
    welcomeDescription:
      "EasyPrompt è il tuo assistente per creare prompt efficaci e precisi in pochi click. Segui i passi, personalizza il tuo prompt e usa i tuoi risultati!",
    startNow: "Comincia subito!",
  
    // Step Indicator e guida
    step: "Step",
    stepGuide: {
      title: "Guida allo Step",
    },
  
    // Step: Ruolo
    roleLabel: "Ruolo AI (scrivilo o selezionalo)",
    rolePlaceholder: "Es. Copywriter",
    roleNotFound: "Questo ruolo non è nella lista. Non verranno forniti suggerimenti automatici.",
  
    // Step: Istruzione + Tecnica
    promptTechnique: "Tecnica di prompting",
    techniqueSuggested: "Tecnica consigliata per il ruolo selezionato",
    instructionLabel: "Istruzione (basata su",
    rolePromptExample: "Prompt di esempio per questo ruolo:",
    selectTechnique: "Scegli la tecnica più adatta:",
    techniqueGuide: "Suggerimento basato sul ruolo selezionato",
  
    // Step: Tono
    tone: "Tono",
  
    // Step: Vincoli
    constraintsLabel: "Vincoli",
    constraintsPlaceholder: "Es: massimo 100 parole...",
    optional: "opzionale",
  
    // Navigazione
    back: "Indietro",
    next: "Avanti →",
  
    // Anteprima Prompt
    previewTitle: "Anteprima Prompt",
    previewNote: "Puoi copiare o scaricare questo prompt nel passo finale.",
  
    // Completamento
    complete: {
      title: "Prompt completato!",
      copy: "Copia Prompt",
      download: "Scarica Prompt",
      reset: "Ricomincia",
    },
  
    // Errori
    error: {
      unknownStep: "Step non riconosciuto",
    },
  
    // Prompt generation
    role: "Agisci nel ruolo di",
    task: "Il compito è:",
    toneUsed: "Usa un tono",
    constraints: "Segui queste indicazioni:",
  
    // Tones
    toneOptions: ["Professionale", "Empatico", "Divertente", "Neutro", "Creativo"],

    useExample: "Usa questo esempio",
  
    // Suggerimenti per ruolo
    suggestionsByRole: {
      "Copywriter": "Scrivi 3 headline per una campagna pubblicitaria di una nuova bibita energetica rivolta ai Gen Z.",
      "Content Strategist": "Progetta un calendario editoriale mensile per un blog B2B che tratta di digital marketing.",
      "Social Media Manager": "Crea 5 caption Instagram per promuovere un evento musicale estivo a Milano.",
      "SEO Specialist": "Genera una lista di parole chiave long-tail per un sito e-commerce di abbigliamento sportivo.",
      "Brand Manager": "Definisci il tone of voice per un brand eco-sostenibile di cosmetici naturali.",
      "Digital PR": "Scrivi un pitch email da inviare a giornalisti per promuovere il lancio di una nuova app di fitness.",
      "Media Planner": "Sviluppa un piano media per aumentare la brand awareness di una startup tecnologica.",
      "Email Marketing Specialist": "Progetta una campagna di email automation per il recupero dei carrelli abbandonati in un e-commerce.",
      "UX Designer": "Scrivi una user story per migliorare l’onboarding di una nuova app di finanza personale.",
      "UI Designer": "Suggerisci miglioramenti all'interfaccia di una dashboard di analytics per aumentarne l’usabilità.",
      "Graphic Designer": "Genera concept grafici per il rebranding di una catena di ristorazione fast-casual.",
      "Motion Designer": "Descrivi un'animazione introduttiva per un’app dedicata alla meditazione.",
      "Art Director": "Coordina il concept creativo per una campagna pubblicitaria multisoggetto per un brand di moda.",
      "Product Designer": "Progetta il flusso utente per la prenotazione di un volo su un'app di viaggio.",
      "Teacher": "Prepara un'esercitazione interattiva sul ciclo dell’acqua per studenti delle scuole medie.",
      "Instructional Designer": "Crea la struttura di un corso e-learning su competenze trasversali per lavoratori in smart working.",
      "Academic Researcher": "Progetta un’indagine qualitativa sull’impatto dell’AI nelle scienze sociali.",
      "Educational Technologist": "Sviluppa un piano per introdurre strumenti digitali inclusivi nella didattica scolastica.",
      "Tutor": "Suggerisci un piano settimanale di studio per uno studente con difficoltà in matematica.",
      "Data Analyst": "Analizza un dataset e trova i principali fattori che influenzano le vendite mensili.",
      "Data Scientist": "Costruisci un modello predittivo per stimare la domanda futura di un servizio di food delivery.",
      "Business Intelligence Analyst": "Crea una dashboard per visualizzare KPI settimanali in un contesto retail.",
      "Research Analyst": "Sviluppa un’analisi di benchmark tra i competitor nel settore automotive.",
      "Statistician": "Progetta un esperimento per validare l’efficacia di una campagna di vaccinazione.",
      "Frontend Developer": "Genera componenti riutilizzabili per una web app in React con supporto responsive.",
      "Backend Developer": "Progetta una struttura API RESTful sicura per la gestione utenti di una piattaforma SaaS.",
      "Fullstack Developer": "Crea un'applicazione ToDo con autenticazione e salvataggio dati su database.",
      "DevOps Engineer": "Scrivi uno script di automazione per il deployment continuo su AWS.",
      "AI Engineer": "Progetta un flusso per addestrare un modello NLP su dati di recensioni clienti.",
      "QA Tester": "Sviluppa casi di test per validare le funzionalità principali di un'app mobile di banking.",
      "Project Manager": "Crea una roadmap trimestrale con milestone e deliverable per il lancio di un nuovo prodotto.",
      "Product Manager": "Scrivi una user story e priorità in backlog per una funzione di 'wishlist' su un e-commerce.",
      "Business Analyst": "Redigi un documento di requisiti funzionali per un gestionale interno HR.",
      "Strategic Consultant": "Proponi un piano di espansione internazionale per una PMI italiana nel settore food.",
      "Operations Manager": "Ottimizza il processo di approvvigionamento per ridurre i tempi di consegna del 20%.",
      "Sales Representative": "Simula una call di vendita con un cliente interessato a una piattaforma di e-learning.",
      "Customer Support Agent": "Scrivi una risposta empatica a un cliente che lamenta ritardi nella spedizione.",
      "Account Manager": "Prepara un report mensile per un cliente enterprise con KPI raggiunti e azioni future.",
      "CRM Specialist": "Crea una segmentazione dei clienti per una campagna mirata via email.",
      "Inside Sales Manager": "Definisci uno script di vendita inbound per un software B2B in fase di lancio.",
      "HR Generalist": "Prepara una job description per una posizione junior in area finance.",
      "Recruiter": "Scrivi un annuncio attrattivo per una posizione da UI Designer in startup.",
      "Talent Acquisition Specialist": "Progetta un funnel di selezione per il recruitment di figure tech.",
      "Learning & Development Manager": "Crea un piano formativo annuale per la crescita del middle management."
    }
  };
  
  export default it;
  