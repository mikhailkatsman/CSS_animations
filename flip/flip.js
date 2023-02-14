const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function toggleCards() {
  cards[currentIndex].classList.toggle('flip-in');
  cards[currentIndex].classList.toggle('flip-out');

  currentIndex = (currentIndex + 1) % cards.length;

  cards[currentIndex].classList.toggle('flip-in');
  cards[currentIndex].classList.toggle('flip-out');
}

cards.forEach(card => {
  card.addEventListener('click', toggleCards);
});