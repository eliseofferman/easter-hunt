// First select the cards
// Attach click event
// Toggle the class to is-switched
// Toggle card children to is-active
function toggle() {
  this.classList.add("is-switched-once");
  this.classList.toggle("is-switched");
}

document.getElementById("card1").onclick = toggle
