function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Tomato schrimps and a lot more fun",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateRecipe);
