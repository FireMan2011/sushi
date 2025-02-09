const imagesList = [
  "../images/heart_broken0.gif",
  "../images/heart_broken1.gif",
  "../images/heart_broken2.gif",
  "../images/heart_broken3.gif",
  "../images/heart_broken4.gif",
  "../images/heart_broken5.gif",
  "../images/heart_broken6.gif",
  "../images/heart_broken7.gif",
  "../images/heart_broken8.gif",
  "../images/heart_broken9.gif",
  "../images/heart_broken10.gif",
  "../images/heart_broken11.gif",
];

const noButtonNamesList = [
  "Are you sure?",
  "Really sure??",
  "Pookie please!!",
  "Just think about it!!!",
  "If you say no, I'll be frustrated",
  "I'll be very very VERY sad...",
];

document.addEventListener("DOMContentLoaded", () => {
  const noButton = document.getElementById("no");
  const yesButton = document.getElementById("yes");
  const sushiImage = document.getElementById("sushi-image");
  const title = document.getElementById("question-title");
  const buttons = document.getElementById("buttons");

  let scale = 1;

  noButton.addEventListener("click", () => {
    const textIndex = Math.floor(Math.random() * noButtonNamesList.length);
    const imageIndex = Math.floor(Math.random() * imagesList.length);
    scale += 0.5;

    yesButton.style.transform = `scale(${scale})`;
    yesButton.style.transition = "transform 0.3s ease";

    noButton.textContent = noButtonNamesList[textIndex];

    sushiImage.src = imagesList[imageIndex];
  });

  yesButton.addEventListener("click", () => {
    sushiImage.src = "../images/love.gif";
    sushiImage.style.width = "70%";

    title.textContent = "I knew you would say YES!";

    buttons.style.display = "none";
  });
});
