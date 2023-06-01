import Aszinkron from "./js/asszinkron.js";
$(function () {
    const asszinkron = new Aszinkron();
    const vegpont = "adatok.json";
    asszinkron.adatBe(vegpont, adatokListaba);
});

function adatokListaba(data) {
    const adatLISTA = data.szemelyek;
    console.log(adatLISTA);
}
