document.getElementById("cross").addEventListener("click", () => {
  let cross = document.getElementById("cross");
  cross.style.display = "none";
  cross.style.transform = "rotate()";
//   document.getElementById
//   document.getElementById("bar").style.width = "20px";
  document.getElementById('toggle').style.width='20px';
//   document.getElementById("toggle").style.backgroundColor=
//   document.getElementById('toggle').style.display="none" 
});
document.getElementById("bar").addEventListener("click", () => {
  document.getElementById("bar").style.display = "block";
  document.getElementById("toggle").style.height = "100vh";
  document.getElementById("toggle").style.backgroundColor = "Aqua";
  document.getElementById("toggle").style.width = "200px";
  let cross = (document.getElementById("cross"));
  cross.style.display="block"
});
