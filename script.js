document.addEventListener(`mousemove`, (event) => {
    const mouseCoords = `X: ${event.clientX}, Y: ${event.clientY}`;
    document.getElementById(`mouseCoords`).textContent = mouseCoords;
})

document.addEventListener(`keydown`, (event) => {
    const keyPress = `${event.key}`;
    document.getElementById(`keyPress`).textContent = keyPress;
})

document.addEventListener(`click`, (event) => {
    const click = `X: ${event.clientX}, Y: ${event.clientY}`;
    document.getElementById(`mouseClick`).textContent = click;
})