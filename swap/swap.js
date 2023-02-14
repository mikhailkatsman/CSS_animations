const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function toggleCards() {
  cards[currentIndex].classList.toggle('fade-in');
  cards[currentIndex].classList.toggle('fade-out');

  currentIndex = (currentIndex + 1) % cards.length;

  cards[currentIndex].classList.toggle('fade-in');
  cards[currentIndex].classList.toggle('fade-out');
}

cards.forEach(card => {
  card.addEventListener('click', toggleCards);
});