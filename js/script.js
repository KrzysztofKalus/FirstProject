console.log("Cześć! Miło mi, że zaglądasz tutaj.")

let changeButton = document.querySelector(".footer__button");
let homeAdres = document.querySelector(".footer__email");

changeButton.addEventListener("click", () => {
    if (changeButton.innerText === "Pokaż_adres_hodowli") {
        homeAdres.innerText = "Chorzów, Rynek 2";
        changeButton.innerText = "Pokaż_adres_e-mail";
    } else {
        homeAdres.innerText = "k.kalus@euco.pl";
        changeButton.innerText = "Pokaż_adres_hodowli";
    }
});