function myImageFunction() {
  let y = document.createElement("img");
  y.classList.add("mygif");
  y.src = "./gif/mysensar.gif";
  y.height = 500;
  y.width = 200;

  document.body.appendChild(y);
}
