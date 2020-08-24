function Bar(config) {
  const btn = document.createElement("button");
  btn.id = "btn";
  btn.innerHTML = "Show Bar";
  btn.style.position = "fixed";
  btn.style.top = "50%";
  btn.style.left = "50%";
  btn.style.margin = "-50px 0px 0px -50px"
  btn.style.height = "100px";
  btn.style.width = "100px";
  btn.style.backgroundColor = "white";
  btn.style.borderRadius = "50%";
  btn.style.color = "black";
  btn.style.border = "2px solid black";
  btn.addEventListener("click", function () {
    console.log("clickedt");
  });
  document.body.appendChild(btn);

  const widget = document.createElement("div");
  if (config.position === "top") {
    widget.style.top = "0";
  }
  if (config.position === "bottom") {
    widget.style.bottom = "0";
  }
  widget.id = "widget";
  widget.style.position = "fixed";
  widget.style.left = "0";
  widget.style.width = "100%";
  widget.style.height = "40px";
  widget.style.backgroundColor = "grey";
  widget.style.display = "flex";
  widget.style.alignItems = "center";
  widget.style.justifyContent = "center";

  document.body.appendChild(widget);

  const text = document.createElement("span");
  text.innerHTML = config.message;
  text.style.textAlign = "center";
  text.style.color = "white";
  text.style.marginLeft = "auto";
  document.getElementById("widget").appendChild(text);

  const alertbtn = document.createElement("button");
  alertbtn.innerHTML = "Get widgets";
  alertbtn.style.padding = "5px";
  alertbtn.style.color = "white";
  alertbtn.style.borderStyle = "none";
  alertbtn.style.backgroundColor = "orange";
  alertbtn.style.marginLeft = "10px";

  document.getElementById("widget").appendChild(alertbtn);

  const closebtn = document.createElement("button");
  closebtn.innerHTML = "X";
  closebtn.style.color = "white";
  closebtn.style.backgroundColor = "grey";
  closebtn.style.borderStyle = "none";
  closebtn.style.marginLeft = "auto";

  document.getElementById("widget").appendChild(closebtn);
}
export default Bar;
