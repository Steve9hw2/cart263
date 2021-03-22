$(`#prisoner`).draggable({
  // axis: `x`,
  containment: "#prison",
  start: function(event, ui) {
    $(this).css(`text-decoration`,`underline`);
  },
  stop: function(event, ui) {
    $(this).css(`text-decoration`,`none`);
  }
});

// setTimeout(function() {
//   $(`#prisoner`).draggable(`disable`);
// },5000);

$(`#escape-tunnel`).droppable({
  drop: function(event, ui) {
    ui.draggable.remove();
  }
})
