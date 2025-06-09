export function generatePrompt({ role, instruction, tone, constraints }) {
    let prompt = `Agisci nel ruolo di ${role.trim()}. `;
  
    prompt += instruction.trim().endsWith('.') 
      ? instruction.trim() + ' ' 
      : instruction.trim() + '. ';
  
    if (tone) {
      prompt += `Adotta un tono ${tone.trim().toLowerCase()}. `;
    }
  
    if (constraints) {
      prompt += `Tieni conto delle seguenti indicazioni: ${constraints.trim()}. `;
    }
  
    return prompt.trim();
  }
  