export function downloadPrompt(prompt) {
  const blob = new Blob([prompt], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'prompt.txt';
  a.click();
  URL.revokeObjectURL(url);
}
