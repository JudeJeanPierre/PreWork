
const beats = ["dog", "bomb", "evil", "arrow", "5....", "6....", "7....", "8....", "9....", "10...", "11...", "12..."];

beats.forEach((audio) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = audio;

  btn.addEventListener("click", () => {
  
    document.getElementById(audio).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

