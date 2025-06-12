export function generatePrompt({ role, instruction, tone, constraints }) {
  let prompt = `Agisci nel ruolo di ${role}.`;

  if (instruction) {
    prompt += ` Il compito è: ${instruction}.`;
  }

  if (tone) {
    prompt += ` Usa un tono ${tone}.`;
  }

  if (constraints) {
    prompt += ` Segui queste indicazioni: ${constraints}.`;
  }

  return prompt.trim();
}
