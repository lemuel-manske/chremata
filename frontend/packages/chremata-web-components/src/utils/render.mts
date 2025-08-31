export function render(wc: string) {
  const preview = document.getElementsByClassName('ch-preview');

  if (preview.length > 1 || !preview[0]) {
    throw new Error('[PREVIEW] - Invalid preview container');
  }

  const renderOn = preview[0];

  renderOn.innerHTML = wc;
}
