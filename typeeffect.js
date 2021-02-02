

var i = 0;
var txt = "Do You Really Think A Human Can Defeat A Computer.     If you think so let's give it a try. Only 5️⃣ Round, Let's see who wins. Click on ready now 👆 ";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Page1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
