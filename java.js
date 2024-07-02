const button = document.getElementById("change");
const text = document.getElementById("text");

button.addEventListener("click", function() {
  const newGradient = RandomGradient();
  document.body.style.background = newGradient;
  text.textContent = newGradient;
  text.style.display = 'block';
});

function RandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i< 6; i++){
    color += letter[Math.floor(Math.random() * 16 )];
  }
  return color;
}

function RandomGradient() {
  const color1 = RandomColor();
  const color2 = RandomColor();
  const angle = Math.floor(Math.random() * 360);
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}
