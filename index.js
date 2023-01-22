var allDocSelector = document.querySelectorAll(".drum").length;
for (var i = 0; i < allDocSelector; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//press function
    var innerHTMLKey = this.innerHTML;
    makeSound(innerHTMLKey);
    buttonAnimation(innerHTMLKey)


  });
}
//keyboard function
document.addEventListener("keydown", function(event) {
  makeSound(event.key)
  buttonAnimation(event.key)
});



function makeSound(key) {
  switch (key) {
    case "w":
      new Audio('sounds/crash.mp3').play()
      break;
    case "a":
      new Audio('sounds/kick-bass.mp3').play()
      break;
    case "s":
      new Audio('sounds/snare.mp3').play()
      break;
    case "d":
      new Audio('sounds/tom-1.mp3').play()
      break;
    case "j":
      new Audio('sounds/tom-2.mp3').play()
      break;
    case "k":
      new Audio('sounds/tom-3.mp3').play()
      break;
    case "l":
      new Audio('sounds/tom-4.mp3').play()
      break;

    default:
      console.log(innerHTMLKey)

  }
}
//for animation
function buttonAnimation(currentKey){
var anim =  document.querySelector("." + currentKey);
anim.classList.add("pressed")
setTimeout(() => anim.classList.remove("pressed"), 100)
}








/**{
if (event.key == "w"){
  new Audio('sounds/crash.mp3').play()} else if(event.key == "a") {
    new Audio('sounds/kick-bass.mp3').play()
  } else if (event.key == "s") {
    new Audio('sounds/snare.mp3').play()
  } else if (event.key == "d") {
    new Audio('sounds/tom-1.mp3').play()
  } else if (event.key == "j") {
    new Audio('sounds/tom-2.mp3').play()
  } else if (event.key == "k") {
    new Audio('sounds/tom-3.mp3').play()
  } else if (event.key == "l") {
    new Audio('sounds/tom-4.mp3').play()
  } else {
    console.log(event)
  }
}
)**/
//new Audio('sounds/crash.mp3').play()
