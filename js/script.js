const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Verifica se o usuário já escolheu um tema anteriormente
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.textContent = '🌙';
  }

  // Evento de clique
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    
    // Atualiza o rótulo do botão simultaneamente
    themeToggle.textContent = isLight ? '🌙' : '☀️';
    
    // Salva a escolha no navegador
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });


  // Menu Mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu ul');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.textContent = '☰';
    });
  });

  
