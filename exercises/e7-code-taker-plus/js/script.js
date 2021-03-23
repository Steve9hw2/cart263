"use strict";

$(`#instructions`).dialog({
  autoOpen: true,
  resizable: false,
  modal: true,
  buttons: {
    "monke": function() {
      $(this).dialog(`close`);
    }
  }
})

$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "Ooo ooo aaa aaa aaa": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  $(`.secret`).draggable({
    helper: `clone`
  });
})

$(`#answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    console.log($(this).text())
    if ($(this).text() === `Jungle`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
