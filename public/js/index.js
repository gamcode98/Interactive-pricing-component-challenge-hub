const d = document;

const $range = d.getElementById("range");
const $p = d.createElement("p");
const $btnSubmit = d.getElementById("btn-submit");
const $spanDiscount = d.querySelector(".billing-discount-text");

$range.addEventListener("mousemove", () => {
  $p.classList.add("month-price");
  $p.innerHTML = `$${$range.value}<span>/month</span>`;
  $range.insertAdjacentElement("afterend", $p);
  $range.style.setProperty("--val", +$range.value);
});
$range.addEventListener("touchmove", () => {
  $p.classList.add("month-price");
  $p.innerHTML = `$${$range.value} <span>/month</span>`;
  $range.insertAdjacentElement("afterend", $p);
  $range.style.setProperty("--val", +$range.value);
});

$btnSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
});

if (window.innerWidth >= 1024) {
  $spanDiscount.classList.add("is-visible");
} else {
  $spanDiscount.classList.remove("is-visible");
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    $spanDiscount.classList.add("is-visible");
  } else {
    $spanDiscount.classList.remove("is-visible");
  }
});
