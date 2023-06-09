
import Aszinkron from "../js/asszinkron.js";

QUnit.test("adatBe metódus tesztje", (assert) => {
    const done = assert.async();
    const asszinkron = new Aszinkron();
    const vegpont = "../adatok.json";
    const callBackFuggvenyem = function (data) {
        assert.deepEqual(data, {
            "szemelyek": [
                {
                  "auto": "Buick",
            
                  "orszag": "USA",
                  "alapitas_ev": 1903
                },
                {
                  "auto": "Cadillac",
            
                  "orszag": "USA",
                  "alapitas_ev": 1902
                },
                {
                  "auto": "Chevrolet",
            
                  "orszag": "USA",
                  "alapitas_ev": 1911
                },
                {
                  "auto": "Chrysler",
            
                  "orszag": "USA",
                  "alapitas_ev": 1925
                },
                {
                  "auto": "Dodge",
            
                  "orszag": "USA",
                  "alapitas_ev": 1901
                },
                {
                  "auto": "Ford",
            
                  "orszag": "USA",
                  "alapitas_ev": 1903
                },
                {
                  "auto": "GEO",
            
                  "orszag": "USA",
                  "alapitas_ev": 1989
                },
                { "auto": "Acura", "orszag": "Japán", "alapitas_ev": 1986 },
                { "auto": "Daihatsu", "orszag": "Japán", "alapitas_ev": 1907 },
                { "auto": "Dome", "orszag": "Japán", "alapitas_ev": 1975 },
                { "auto": "Honda", "orszag": "Japán", "alapitas_ev": 1948 },
                { "auto": "Infiniti", "orszag": "Japán", "alapitas_ev": 1989 },
                { "auto": "Isuzu", "orszag": "Japán", "alapitas_ev": 1937 },
                { "auto": "Lexus", "orszag": "Japán", "alapitas_ev": 1989 },
                { "auto": "Mazda", "orszag": "Japán", "alapitas_ev": 1920 },
                { "auto": "Mitsubishi", "orszag": "Japán", "alapitas_ev": 1870 },
                { "auto": "Nissan", "orszag": "Japán", "alapitas_ev": 1932 }
              ],

        });
        done();
    };
    asszinkron.adatBe(vegpont, callBackFuggvenyem);
    
});