<<<<<<< HEAD
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
=======
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
>>>>>>> c1f4be54256d65f6c2f7b93e153b22728b1b38e6
