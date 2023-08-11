let menuIcon = document.getElementById("menuToggle");
let navbar = document.getElementById("navbar");

let signIn = document.getElementById("signIn");
let popUp = document.querySelector(".popup");
let closebtn = document.getElementById("closebtn");

signIn.addEventListener("click", () => {
    popUp.classList.remove("hide");
});

closebtn.addEventListener("click", () => {
    popUp.classList.add("hide");
});

menuIcon.addEventListener("click", toggle);

function toggle() {
    navbar.classList.toggle("activebar");
}

const allfilterItems = document.querySelectorAll(".card");
const allfilterBtns = document.querySelectorAll(".filter-button");

allfilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        showFilterContent(btn);
    });
});

function showFilterContent(btn) {
    allfilterItems.forEach((item) => {
        if (item.classList.contains(btn.id)) {
            resetActiveBtn();
            all.classList.remove("active-btn");
            btn.classList.add("active-btn");

            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn() {
    allfilterBtns.forEach((btn) => {
        btn.classList.remove("active-btn");
    });
}