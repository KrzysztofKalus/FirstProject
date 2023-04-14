{
    const welcome = () => {
        console.log("Cześć! Miło mi, że zaglądasz tutaj.")
    }
    welcome();

    const onChangeBacgroundClick = () => {
        const changeButton = document.querySelector(".footer__button");
        const homeAdres = document.querySelector(".footer__email");
        if (changeButton.innerText === "Pokaż_adres_hodowli") {
            homeAdres.innerText = "Chorzów, Rynek 2";
            changeButton.innerText = "Pokaż_adres_e-mail";
        } else {
            homeAdres.innerText = "k.kalus@euco.pl";
            changeButton.innerText = "Pokaż_adres_hodowli";
        }
    }

    const init = () => {
        const changeButton = document.querySelector(".footer__button");
        changeButton.addEventListener("click", onChangeBacgroundClick);
    }
    init();
}