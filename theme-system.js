(() => {
  const launcher = document.getElementById('themeLauncher');
  const overlay = document.getElementById('themePanelOverlay');
  const panel = document.getElementById('themePanel');
  const closeButton = document.getElementById('themePanelClose');
  const options = Array.from(document.querySelectorAll('.theme-option'));

  if (!launcher || !overlay || !panel || !closeButton || !options.length) return;

  function currentTheme() {
    return document.documentElement.dataset.tema || 'classico';
  }

  function updateSelection() {
    const selected = currentTheme();
    options.forEach(option => {
      const active = option.dataset.theme === selected;
      option.classList.toggle('selecionado', active);
      option.setAttribute('aria-pressed', String(active));
    });
  }

  function openPanel() {
    updateSelection();
    overlay.classList.add('aberto');
    launcher.setAttribute('aria-expanded', 'true');
    document.body.classList.add('theme-panel-open');

    const selected = options.find(option => option.classList.contains('selecionado'));
    requestAnimationFrame(() => (selected || closeButton).focus());
  }

  function closePanel() {
    overlay.classList.remove('aberto');
    launcher.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('theme-panel-open');
    launcher.focus();
  }

  launcher.addEventListener('click', openPanel);
  closeButton.addEventListener('click', closePanel);

  overlay.addEventListener('click', event => {
    if (event.target === overlay) closePanel();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && overlay.classList.contains('aberto')) {
      closePanel();
    }
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      const theme = option.dataset.theme;
      if (typeof window.aplicarTema === 'function') {
        window.aplicarTema(theme);
      } else {
        document.documentElement.dataset.tema = theme;
        try {
          localStorage.setItem('bingoTema', theme);
        } catch (error) {}
      }
      updateSelection();
      closePanel();
    });
  });

  updateSelection();
})();

(() => {
  const launcher = document.getElementById('markerLauncher');
  const overlay = document.getElementById('markerPanelOverlay');
  const panel = document.getElementById('markerPanel');
  const closeButton = document.getElementById('markerPanelClose');
  const options = Array.from(document.querySelectorAll('.marker-option'));

  if (!launcher || !overlay || !panel || !closeButton || !options.length) return;

  function currentMarker() {
    return document.documentElement.dataset.marcador || 'vermelho';
  }

  function updateSelection() {
    const selected = currentMarker();
    options.forEach(option => {
      const active = option.dataset.marker === selected;
      option.classList.toggle('selecionado', active);
      option.setAttribute('aria-pressed', String(active));
    });
  }

  function openPanel() {
    updateSelection();
    overlay.classList.add('aberto');
    launcher.setAttribute('aria-expanded', 'true');
    document.body.classList.add('theme-panel-open');

    const selected = options.find(option => option.classList.contains('selecionado'));
    requestAnimationFrame(() => (selected || closeButton).focus());
  }

  function closePanel() {
    overlay.classList.remove('aberto');
    launcher.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('theme-panel-open');
    launcher.focus();
  }

  launcher.addEventListener('click', openPanel);
  closeButton.addEventListener('click', closePanel);

  overlay.addEventListener('click', event => {
    if (event.target === overlay) closePanel();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && overlay.classList.contains('aberto')) {
      closePanel();
    }
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      const marker = option.dataset.marker;
      if (typeof window.aplicarCorMarcador === 'function') {
        window.aplicarCorMarcador(marker);
      } else {
        document.documentElement.dataset.marcador = marker;
        try {
          localStorage.setItem('bingoCorMarcador', marker);
        } catch (error) {}
      }
      updateSelection();
      closePanel();
    });
  });

  updateSelection();
})();
