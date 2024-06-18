const card = document.querySelector(".card");
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore deserunt at reiciendis corporis in beatae temporibus tempore, nemo natus amet sed quia dicta molestias blanditiis neque, rem obcaecati repellat!";

const textBlock = document.createElement("p");
textBlock.textContent = text;
card.insertAdjacentElement("beforeend", textBlock);

const btn = document.createElement("p");
btn.textContent = "<- Load more";
btn.classList.add("loadBtn");
card.insertAdjacentElement("beforeend", btn);

btn.addEventListener("click", () => {
  if (btn.textContent === "load less ->") {
    textBlock.textContent = text;
    btn.textContent = "<- Load more";
  } else {
    textBlock.textContent = shortText(text);
    btn.textContent = "load less ->";
  }
});

function shortText(value) {
  const maxLength = 65;
  if (value.length <= maxLength) {
    return value;
  }

  const shorted = value.slice(0, maxLength - 3) + "...";
  return shorted;
}

shortText(text);
