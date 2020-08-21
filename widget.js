function Bar(config) {
  return console.log(config.message, config.position);
}

const btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = "Show Bar";
btn.style.display = "block";
btn.style.margin = "400px auto";
btn.style.height = "100px";
btn.style.width = "100px";
btn.style.backgroundColor = "white";
btn.style.borderRadius = "50%";
btn.style.color = "black";
btn.style.border = "2px solid black";
btn.addEventListener("click", function () {
  console.log("clicked");
});
document.body.appendChild(btn);

export default Bar;

