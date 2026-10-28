onload = function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const favoriteThings = document.getElementsByName("favorite").values();
    favoriteThings[2, 1, 3];
    const count = favoriteThings.push(2, 1, 3);
    const liElement = document.createElement("li");
    liElement.prepend(count);
    const ulElement = document.createElement("ul");
    ulElement.prepend(liElement);
    const body = document.querySelector("body");
    body.append(ulElement);
  });
}