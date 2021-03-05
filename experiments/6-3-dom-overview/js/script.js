let mainHeading = document.getElementById(`main-heading`);
let wellSection = document.getElementById(`well-section`);
let pronoun = document.getElementById(`pronoun`);
let image = document.getElementById(`clown-image`);

let headers = document.getElementsByClassName(`header`); // find using DOM
let headersCSS = document.querySelectorAll(`.header`); // find using CSS selectors

let h2s = document.getElementsByTagName(`h2`);

let newP = document.createElement(`p`);
newP.innerText = `clowns are terrifying. bad. gross.`

let clownSection = document.getElementById(`clown-section`);
clownSection.appendChild(newP);

mainHeading.parentElement.removeChild(mainHeading);


mainHeading.style.color = `#339966`;
mainHeading.style[`font-size`] = `4rem`;
mainHeading.style[`font-family`] = `Courier`, `monospace`;
mainHeading.style.backgroundColor = `blue`;
mainHeading.innerText = `i hate css`

wellSection.style.color = `#116699`;

if (pronoun.innerText === `we`) {
pronoun.innerText = `you`;
pronoun.innerHTML = `<strong>you</strong>`;
}

image.setAttribute(`src`,`https://loremflickr.com/320/240/clown`)

for (let i = 0; i < headers.length; i++) {
  let header = headers[i];
  header.style[`color`] = `#ff0000`;
}

for (let i = 0; i < h2s.length; i++) {
  h2s[i].style[`font-size`] = `2rem`;
}
