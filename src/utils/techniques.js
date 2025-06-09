export const techniques = {
    few: {
      label: "Few​-Shot",
      guide: `Fornisci 1​-2 esempi completi per mostrare all'AI cosa fare. Es.:
  
  Input: “Qual è la capitale dell’Italia?”
  Output: “Roma”`,
      placeholder: "Es. Scrivi un esempio input-output per istruire l'AI su un compito..."
    },
    cot: {
      label: "Chain​-of​-Thought",
      guide: `Invita l’AI a ragionare passo​-passo. Es.:
  
  \"Inizia pensando ad alta voce per spiegare il tuo ragionamento.\"`,
      placeholder: "Es. Spiega passo-passo come si risolve un problema matematico..."
    },
    zero: {
      label: "Zero​-Shot",
      guide: `Fornisci solo l'istruzione, senza esempi. L’AI deduce il compito. Es.:
  
  \"Riassumi questo testo in una frase.\"`,
      placeholder: "Es. Riassumi il seguente testo in una frase..."
    },
    reflexion: {
      label: "Reflexion",
      guide: `Chiedi all’AI di rivalutare o migliorare una risposta. Es.:
  
  \"Rileggi la tua risposta e correggi eventuali errori.\"`,
      placeholder: "Es. Migliora la risposta precedente individuando eventuali errori..."
    },
    react: {
      label: "ReAct",
      guide: `Combina ragionamento e azioni. Es.:
  
  \"Pensa a quale informazione ti serve, simula un’azione, poi rifletti sul risultato.\"`,
      placeholder: "Es. Analizza una situazione e simula i passaggi necessari..."
    },
    multi: {
      label: "Multi​-Turn",
      guide: `Scomponi un compito complesso in più fasi. Es.:
  
  \"Per prima cosa spiega il contesto. Poi affronta ogni punto uno alla volta.\"`,
      placeholder: "Es. Scomponi in fasi la spiegazione di un concetto complesso..."
    }
  };