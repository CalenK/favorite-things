onload = function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const favoriteThings = Array.from(document.querySelectorAll("input"), input => input.value)
    favoriteThings[1, 0, 2];
    const secondFavoriteThing = favoriteThings[1];
    const firstFavoriteThing = favoriteThings[0];
    const thirdFavoriteThing = favoriteThings[2];
    const topMostFavoritedThings = [secondFavoriteThing, firstFavoriteThing, thirdFavoriteThing];
    const liElement1 = document.createElement("li");
    const liElement2 = document.createElement("li");
    const liElement3 = document.createElement("li");
    liElement1.prepend(topMostFavoritedThings[0]);
    liElement2.prepend(topMostFavoritedThings[1]);
    liElement3.prepend(topMostFavoritedThings[2]);
    const ulElement = document.createElement("ul");
    ulElement.prepend(liElement1, liElement2, liElement3);
    const body = document.querySelector("body");
    body.append(ulElement);
  });
};