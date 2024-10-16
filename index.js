// Search Logic
const input = document.getElementById("destinationInput");
const listItems = document.querySelectorAll("#destinationList li");

input.addEventListener("keyup", function () {
  const filter = input.value.toLowerCase();

  listItems.forEach(function (item) {
    if (item.textContent.toLowerCase().includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
