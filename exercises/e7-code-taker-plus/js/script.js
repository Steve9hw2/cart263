"use strict";

$(`#monke`).hide();   // hide the win image

$(`#instructions`).dialog({       // instructions at the start- they show automatically as a modal to prevent interaction before closing them.
  autoOpen: true,
  resizable: false,
  modal: true,
  buttons: {
    "monke": function() {
      $(this).dialog(`close`);
    }
  }
})

$(`#solved-dialog`).dialog({    // textbox that appears on victory
  autoOpen: false,
  buttons: {
    "Ooo ooo aaa aaa aaa": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`.secret`).one(`mouseover`, function(event) {   // when the user mouses over a solution letter
  $(this).addClass(`found`, 500);
  $(`.secret`).draggable({
    helper: `clone`
  });
})

$(`#answer`).droppable({   // when the solution letter is dropped in the answer box
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    console.log($(this).text()) // debug check for the current text
    if ($(this).text() === `Jungle`) {   // if the solution is correct
      $(`#solved-dialog`).dialog(`open`);
      $(`#poem`).hide();
      $(`#answer`).hide();
      $(`#monke`).show();
    }
  }
});
