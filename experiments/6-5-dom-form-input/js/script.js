let textInput = document.getElementById(`example-text-input`)
let button = document.getElementById(`submit-button`);
let slider = document.getElementById(`example-slider`);
let check = document.getElementById(`check-button`);
let picker = document.getElementById(`color-picker`);

button.addEventListener(`click`, function(event) {
  let input = textInput.value;
  alert(input);
});

textInput.addEventListener(`keydown`, function(event){
  if (event.keyCode === 13) {
    let input = textInput.value;
    alert(input);
  }
});

check.addEventListener(`click`, function(event){
  let value = slider.value;
  alert(value);
});

slider.addEventListener(`change`, function(event){
  alert(slider.value);
});

picker.addEventListener(`input`, function(event){
  let color = picker.value;
  document.body.style[`background-color`] = color;
});
