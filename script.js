
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

let info = document.querySelector(".info");
let popup = document.querySelector(".popup");

info.addEventListener('click', () => {
    popup.classList.toggle("active");
    info.classList.toggle("active");
    info.innerText = info.innerText === '?' ? 'X' : '?'
})



