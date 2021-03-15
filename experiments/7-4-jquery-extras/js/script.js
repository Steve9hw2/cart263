// $(`.header`).addClass(`highlight`);
//
// $(`.header`).on(`click`,function(event) {
//   $(this).removeClass(`highlight`);
// });
//
// setInterval(function() {
//   $(`.header`).toggleClass(`highlight`);
// }, 500);
//
// $(`#button`).on(`click`,function(event) {
//   $(`#main-heading`).fadeOut(2500, function() {
//     $(`.header`).fadeIn(2500);     // .hide(), .show();
//   });
// });

// $(`#button`).on(`click`, function(event) {                 ---- ANIMATE
//   $(`.header`).animate({
//     "opacity": 0.5,
//     "font-size": "3rem"
//   },2000, function() {
//     $(this).text("ANIMATED!!!!");
//   });
// });

$(`.header`).each(function(event){
  let reverseText = $(this).text().split(``).reverse().join(``);
  $(this).text(reverseText);
});
