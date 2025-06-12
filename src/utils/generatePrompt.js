export function generatePrompt({ role, instruction, tone, constraints, t }) {
  let prompt = `${t.role} ${role}.`;

  if (instruction) {
    prompt += ` ${t.task} ${instruction}.`;
  }

  if (tone) {
    prompt += ` ${t.toneUsed} ${tone}.`;
  }

  if (constraints) {
    prompt += ` ${t.constraints} ${constraints}.`;
  }

  return prompt.trim();
}
