//This will show mouse cursor coordinates anywhere on screen when hovering over the page
document.addEventListener(`mousemove`, (event) => {
    let mouseCoords = `X: ${event.clientX}, Y: ${event.clientY}`;
    document.getElementById(`mouseCoords`).textContent = mouseCoords;
})

//This Shows the last Character selected and will also change it to a CAPITAL LETTER
document.addEventListener(`keydown`, (event) => {
    let keyPress = `${event.key}`.toUpperCase();
    document.getElementById(`keyPress`).textContent = keyPress;
})

//This will show the last coordinates of the mouse location on page when/where it was clicked
document.addEventListener(`click`, (event) => {
    let click = `X: ${event.clientX}, Y: ${event.clientY}`;
    document.getElementById(`mouseClick`).textContent = click;
})

//This will show the KeyCode assigned to the keyboard/keypress when clicked
document.addEventListener(`keydown`, (event) => {
    let keyClick = `${event.keyCode}`
    document.getElementById(`keyClick`).textContent = keyClick
})

