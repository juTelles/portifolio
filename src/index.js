
let index = 0;
var title = "I'm Juliana"; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
 
async function titleWriter() {
  if (index < title.length) {
    document.getElementById("title").innerHTML += title.charAt(index);
    try {
      let witrerEffect = new Audio('/sounds/typewriter-key-1.mp3');
      await witrerEffect.play();
    } catch (error) {
      console.log('ups')
    }
    setTimeout(titleWriter, speed);
    index++;
    
  }
};
window.addEventListener('load', titleWriter)