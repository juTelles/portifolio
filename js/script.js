require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

let index = 0;
var title = "I'm Juliana"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
 
const titleWriter = () => {
  if (index < title.length) {
    document.getElementById("title").innerHTML += title.charAt(index);
    index++;
    setTimeout(titleWriter, speed);
  }
};
window.addEventListener('load', titleWriter)