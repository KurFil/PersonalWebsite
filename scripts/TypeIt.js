function toggleTheme() {
  const body = document.body;
  const toggleThemeButton = document.getElementById('toggleThemeButton');

  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    toggleThemeButton.classList.replace('bx-moon', 'bx-sun');
    document.documentElement.style.setProperty('--text-color', '');
  } else {
    body.classList.add('light-theme');
    toggleThemeButton.classList.replace('bx-sun', 'bx-moon');
    const textColorPicker = document.getElementById('textColorPicker');
    const selectedColor = textColorPicker.value;
    document.documentElement.style.setProperty('--text-color', selectedColor);
  }

  const h1Element = document.querySelector('h1');
  h1Element.style.color = body.classList.contains('light-theme') ? '#000' : '';

  const h3Element = document.querySelector('h3');
  h3Element.style.color = body.classList.contains('light-theme') ? '#000' : '';

  const pElement = document.querySelector('p');
  pElement.style.color = body.classList.contains('light-theme') ? '#000' : '';
}