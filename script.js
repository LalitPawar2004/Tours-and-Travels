// jQuery interaction
$(document).ready(function () {
  $('#myBtn').click(function () {
    $('#output').text('You clicked the button!');
  });
});



// javascript for the holiday pages
  function filterPackages(category) {
    const cards = document.querySelectorAll('.package-card');
    cards.forEach(card => {
      if (category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = card.classList.contains(category) ? 'block' : 'none';
      }
    });
  }
