const searchInput = document.getElementById("searchInput");
const cards = [...document.querySelectorAll(".game-card")];
const resultCount = document.getElementById("resultCount");
const recommendBtn = document.getElementById("recommendBtn");
const recommendationText = document.getElementById("recommendationText");

const games = [
  "Minecraft",
  "Blox Fruits",
  "Rocket League",
  "Fortnite",
  "Roblox",
  "GTA V"
];

function updateCount() {
  const visible = cards.filter(card => !card.classList.contains("hidden")).length;
  resultCount.textContent = visible + " juegos";
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    card.classList.toggle("hidden", !name.includes(query));
  });

  updateCount();
});

recommendBtn.addEventListener("click", () => {
  const randomGame = games[Math.floor(Math.random() * games.length)];
  recommendationText.textContent =
    "Hoy podrías jugar a: " + randomGame + " 🎯";
});

function showGame(name) {
  alert("La página de " + name + " estará disponible próximamente.");
}

updateCount();
