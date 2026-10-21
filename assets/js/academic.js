(() => {
  const controls = document.querySelector('.publication-controls');
  if (controls) {
    controls.hidden = false;
    const papers = [...document.querySelectorAll('.publication')];
    controls.addEventListener('click', event => {
      const button = event.target.closest('button[data-filter]');
      if (!button) return;
      controls.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      let count = 0;
      papers.forEach(paper => {
        paper.hidden = button.dataset.filter !== 'all' && paper.dataset.year !== button.dataset.filter;
        if (!paper.hidden) count++;
      });
      controls.querySelector('.publication-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
    });
    window.addEventListener('beforeprint', () => {
      papers.forEach(paper => { paper.hidden = false; });
    });
    window.addEventListener('afterprint', () => {
      controls.querySelector('[aria-pressed="true"]').click();
    });
  }
  document.querySelectorAll('.print-cv').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      document.querySelectorAll('details').forEach(item => { item.dataset.wasOpen = item.open; item.open = true; });
      window.print();
    });
  });
  window.addEventListener('afterprint', () => {
    document.querySelectorAll('details[data-was-open]').forEach(item => { item.open = item.dataset.wasOpen === 'true'; delete item.dataset.wasOpen; });
  });
  document.querySelectorAll('nav a').forEach(link => {
    if (!link.hash && link.pathname === location.pathname) link.setAttribute('aria-current', 'page');
  });
})();
