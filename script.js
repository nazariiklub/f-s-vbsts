let to_cards = document.getElementById("btn-scroll");
let cards = document.getElementById("robyty");
let to_media = document.getElementById("btn-scroll2");
let media = document.getElementById("media");

to_cards.addEventListener("click", function() {
  cards.scrollIntoView({ behavior: "smooth" });
});

to_media.addEventListener("click", function() {
  media.scrollIntoView({ behavior: "smooth" });
});