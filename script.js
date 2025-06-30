let to_cards = document.getElementById("btn-scroll");
let cards = document.getElementById("robyty");

to_cards.addEventListener("click", function() {
  cards.scrollIntoView({ behavior: "smooth" });
});
