const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll('.scramble-effect').forEach(scrambleEffect => {
    scrambleEffect.onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
          if (index < iterations || event.target.dataset.value[index] == " ") {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);
  };
});
