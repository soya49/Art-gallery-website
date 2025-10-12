// Simple card hover effect
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('shadow-lg'));
  card.addEventListener('mouseleave', () => card.classList.remove('shadow-lg'));
});
