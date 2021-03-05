// document.addEventListener(`click`,function(event) {
//   document.body.style[`background-color`] = `#ff0000`;
// });

let paragraph = document.getElementById(`paragraph`);
let opacity = 1;

setTimeout(function() {
  paragraph.style[`color`] = `#ff0000`;
}, 3000);

setInterval(blink,500);

paragraph.addEventListener(`click`,function(event) {
  paragraph.style[`background-color`] = `#ff0000`;
  paragraph.innerText = `${event.clientX}`;
});

fadeOut();

function fadeOut() {
  opacity -= 0.01;
  paragraph.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(fadeOut);
  }
}

function blink() {
  let opacityp = paragraph.style[`opacity`];
  if (opacityp === `1`) {
    paragraph.style[`opacity`] = `0`;
  } else {
    paragraph.style[`opacity`] = `1`;
  }
}
