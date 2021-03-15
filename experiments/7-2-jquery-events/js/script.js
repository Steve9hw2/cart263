

$(`section`).on(`click`, function(event) {
  $(this).append(`<p>This was added lol.</p>`)
});

$(`section`).one(`click`, function(event) {
  $(this).append(`<p>This was added just once!!!</p>`)
});

$(`#main-heading`).click(function(event) {
  $(this).remove();
})
