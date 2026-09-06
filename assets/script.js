document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-count');
  const counter = document.getElementById('counter');
  const gallery = document.getElementById('cat-gallery');
  let count = 0;

  if (btn && counter && gallery) {
    btn.addEventListener('click', () => {
      count++;
      counter.textContent = count;

      const img = document.createElement('img');
      img.src = `https://cataas.com/cat?${Date.now()}_${count}`;
      img.alt = 'fotoGato';
      img.className = 'rounded border shadow-sm';
      img.style.width = '45px';
      img.style.height = '45px';
      img.style.objectFit = 'cover';

      gallery.appendChild(img);
    });
  }
});