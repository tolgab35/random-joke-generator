const jokeContainer = document.getElementById("joke");
const jokeButton = document.getElementById("jokeButton");
const url = "https://v2.jokeapi.dev/joke/Any?&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};
jokeButton.addEventListener("click", getJoke);

// Fetch a joke when the page loads
getJoke();
