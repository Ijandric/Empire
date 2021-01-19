let buttons = document.querySelectorAll(".btn");

buttons.forEach(e => {
    e.addEventListener('click', (event) => {
        console.log("click", event)
        let parent = event.target.parentElement;
        if (event.target.innerText === "+") {
            //parent.firstChild.innerText = Number(parent.firstChild.innerText) + 1;
            parent.firstElementChild.innerText++
        } else {
            parent.firstElementChild.innerText--
        }
    });
});