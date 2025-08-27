let to_cards = document.getElementById("btn-scroll");
let cards = document.getElementById("robyty");
let to_media = document.getElementById("btn-scroll2");
let media = document.getElementById("media");
let CopyText = document.getElementById("copytext")
let doorPage = document.querySelector(".door-webp");
let doorCard = document.querySelector(".card_div"); 
let backBtn = document.querySelector(".back");
let mainSection = document.querySelector("main");
let cardDivs = document.querySelectorAll(".card_div");

to_cards.addEventListener("click", function() {
  cards.scrollIntoView({ behavior: "smooth" });
});

to_media.addEventListener("click", function() {
  media.scrollIntoView({ behavior: "smooth" });
});

function copyText() {
  const text = document.getElementById("CopyText").innerText;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Текст скопійовано! ✅");
    })
    .catch(err => {
      console.error("Помилка копіювання: ", err);
    });
}


cardDivs.forEach(card => {
  card.addEventListener("click", function() {
    mainSection.style.display = "none";

    let targetClass = card.getAttribute("data-target");
    let targetSection = document.querySelector(`.${targetClass}`);

    let allSections = document.querySelectorAll(".doors-webp, .stears-webp, .benches-webp, .tables-webp, .Beds-webp, .wardrobe-webp");
    allSections.forEach(sec => sec.style.display = "none");

    targetSection.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

let backBtns = document.querySelectorAll(".back");
backBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    btn.closest("div[class$='-webp']").style.display = "none";
    mainSection.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

