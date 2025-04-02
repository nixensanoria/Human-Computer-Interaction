let currentLight = "red";  

function changeLight() {
  document.getElementById("red").style.backgroundColor = "#555";
  document.getElementById("yellow").style.backgroundColor = "#555";
  document.getElementById("green").style.backgroundColor = "#555";

  if (currentLight === "red") {
    document.getElementById("green").style.backgroundColor = "green";
    currentLight = "green";
  } else if (currentLight === "green") {
    document.getElementById("yellow").style.backgroundColor = "yellow";
    currentLight = "yellow";
  } else if (currentLight === "yellow") {
    document.getElementById("red").style.backgroundColor = "red";
    currentLight = "red";
  }
}