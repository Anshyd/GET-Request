console.log("Coding.js");
// https://api.github.com/users
let url = document.getElementById("basic-url");
let button = document.getElementById("getButton");
let codewWritingSection = document.getElementById("pre");
function getData() {
  fetch(url.value)
    .then((response) => {
          return response.json();
    })
    .then((data) => {
        codewWritingSection.innerHTML = JSON.stringify(data);
        
    });
}
button.addEventListener("click", getData);