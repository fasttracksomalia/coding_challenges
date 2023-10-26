
// write a for loop that injects 20 H1 that say 'I was created in JavaScript to the HTML file
// create also add span that says 'same here, but I was created by JS and I am a span'
for (let i = 0; i < 20; i++) {
    let firstDiv = document.createElement("h1")
    firstDiv.textContent = "I was created in JavaScript"
    document.body.appendChild(firstDiv)


    let span = document.createElement("span")
    span.textContent = "same here, but I was created by JS and I am a span "
    document.body.insertBefore(span,firstDiv)
}