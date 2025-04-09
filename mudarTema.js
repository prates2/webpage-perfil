const toggleBtn = document.getElementById('mudarTema');

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});