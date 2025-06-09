export function generatePrompt({ role, instruction, tone, constraints, technique }) {
  let prompt = "";

  if (role) prompt += `Agisci come ${role}. `;
  if (technique) prompt += `Usa un approccio di tipo ${technique}. `;
  if (instruction) {
    prompt += instruction.trim().endsWith(".")
      ? instruction.trim() + " "
      : instruction.trim() + ". ";
  }
  if (tone) prompt += `Rispondi con tono ${tone.toLowerCase()}. `;
  if (constraints) prompt += `Rispetta questi vincoli: ${constraints.trim()}. `;

  return prompt.trim();
}
