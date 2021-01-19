let buttons = document.querySelectorAll(".btn");

buttons.forEach(e => {
    e.addEventListener('click', (event) => {
        let parent = event.target.parentElement;
        if (event.target.innerText === "+") {
            parent.firstElementChild.innerText++
        } else {
            parent.firstElementChild.innerText--
        }
    });
});