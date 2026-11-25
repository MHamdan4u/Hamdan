// Filter design work by category
const chips = document.querySelectorAll('.chip');
const tiles = document.querySelectorAll('.tile');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    tiles.forEach(tile => {
      tile.hidden = filter !== 'all' && tile.dataset.cat !== filter;
    });
  });
});

// Keep only one documentary open at a time
const docs = document.querySelectorAll('.doc');
docs.forEach(doc => {
  doc.addEventListener('toggle', () => {
    if (doc.open) docs.forEach(other => { if (other !== doc) other.open = false; });
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
