const accordion = document.querySelector(".accordion-card-container");

const showAnswer = answer => {
    answer.parentElement.children[0].style.fontWeight = "700";
    answer.classList.remove("hide");
    answer.classList.add("show");
    accordion.style.height = "550px";
};

const hideAnswer = answer => {
    answer.parentElement.children[0].style.fontWeight = "400";
    answer.classList.remove("show");
    answer.classList.add("hide");
    accordion.style.height = "500px";
};

accordion.addEventListener("click", e => {
    if (e.target.id.match(/arrow/)) {
        let answer = e.target.parentElement.children[2];
        if (answer.classList.contains("hide")) {
            showAnswer(answer);

        } else {
            hideAnswer(answer);
        }
    }

}); 

console.log(window.innerWidth);