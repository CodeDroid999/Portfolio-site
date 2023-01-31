
//form validatiion
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  //typewriter effect
  var i = 0;
var txt = 'Thank you for the message...talk to you soon!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("thanks").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


