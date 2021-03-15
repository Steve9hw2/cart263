let $mainHeading = $(`#main-heading`);
$mainHeading.css(`color`,`#113399`);

let $headers = $(`.header`);

let spanText = $(`#example-span`).text();
let reversedSpanText = spanText.split(``).reverse().join(``);
$(`#example-span`).text(reversedSpanText);

$headers.css(`color`,`#0000ff`)
$headers.css(`background-color`, `black`);
$headers.css(`font-size`,`3rem`);
$(`#main-heading`).css({
 "color": `blue`,
 "background-color": `black`,
 "font-size": `10rem`
});
