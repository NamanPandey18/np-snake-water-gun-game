let userScore = 0;
let compScore = 0;

const opts = document.querySelectorAll(".opt");
const msg = document.querySelector(".msg");

const userScoreP = document.querySelector("#us");
const compScoreP = document.querySelector("#cs");

const comtsel = () => {
    const choices = ["snake", "water", "gun"]
    const randomId = Math.floor(Math.random() * 3);
    return choices[randomId];
};

const draw = () => {
    msg.innerText = "Game Was Draw. Play again."
    msg.classList.remove("red");
    msg.classList.remove("green");
};

const showWinner = (userWin, usersel, coms) => {
    if (userWin) {
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerText = `You Win! your ${usersel} beats computer's ${coms}`
        msg.classList.add("green");
        msg.classList.remove("red");
    }
    else {
        compScore++;
        compScoreP.innerText = compScore;
        msg.innerText = `You Lost! Computer's ${coms} beats your ${usersel}`
        msg.classList.add("red");
        msg.classList.remove("green");

    }
};
const playGame = (usersel) => {
    const coms = comtsel();
    if (usersel === coms) {
        draw();
    }
    else {
        let userWin = true;
        if (usersel === "snake") {
            userWin = coms === "water";
        } else if (usersel === "water") {
            userWin = coms === "gun";
        } else if (usersel === "gun") {
            userWin = coms === "snake";
        }
        showWinner(userWin, usersel, coms);
    }
};
opts.forEach((opt) => {
    opt.addEventListener("click", () => {
        const usersel = opt.getAttribute("id");
        playGame(usersel);
    });
});