const SearchEl = document.querySelector(".search");
const containerChildEl = document.querySelector(".continer").children;
const conEl = document.querySelector(".con");

conEl.style.boxShadow = "none";

SearchEl.addEventListener("click", () => {
  conEl.style.boxShadow = "none";
  for (let i = 0; i < containerChildEl.length; i++) {
    containerChildEl[i].classList.remove("active");
    conEl.style.boxShadow = "4px 4px 8px";
  }
});
