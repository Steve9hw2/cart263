$(`#example-button`).on(`click`,function(event) {
  let input = $(`#example-text-input`).val();
  alert(input);
});

$(`#range-slider`).on(`change`,function(event) {
  let input = $(this).val();
  alert(input);
});
