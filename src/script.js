function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "b6461bfaaot32c8f10f63ac1e954cc39";
  let context =
    "You are an italian chefe specialized in pasta. Provide a simple recipe. Please generate the recipe in basin HTML and always show the ingredients a list item and start the instructions in a new line";
  let prompt = `generate a short recipe using the ingredient ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink"> Generating your 🍝 recipe with ${userInput.value}...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateRecipe);
