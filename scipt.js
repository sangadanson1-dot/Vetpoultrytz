// SEARCH
document.getElementById('search')?.addEventListener('input', function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll('.resource').forEach(el => {
    const txt = el.textContent.toLowerCase();
    el.style.display = txt.includes(q) ? 'block' : 'none';
  });
});

// DOWNLOAD COUNTER
window.downloadFile = function() {
  const c = document.getElementById('dl-count');
  if (c) c.textContent = (parseInt(c.textContent) || 0) + 1;
  alert('PDF itapakuliwa — angalia folder ya Downloads.');
};

// AGIZA MZIGO — WhatsApp
window.orderMzigo = function() {
  const name = document.getElementById('name')?.value.trim();
  const animal = document.getElementById('animal')?.value.trim();
  if (!name || !animal) return alert('Jaza jina na aina ya wanyama.');
  const msg = `Shikamoo Danson, mimi ${name}. Nataka mzigo wa: ${animal}.`;
  window.open(`https://wa.me/255776011896?text=${encodeURIComponent(msg)}`, '_blank');
};
