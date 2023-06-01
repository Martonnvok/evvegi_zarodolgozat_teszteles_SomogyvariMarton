import Statisztika from "../js/Statisztika.js";

QUnit.module('adatok megjelenitese', function (hooks) {
    let statisztika
    hooks.before(() => {
        statisztika = new Statisztika();
    });

    QUnit.test('létezik-e a orszagokSzerintAutokSzama ?', function (assert) {
        assert.ok(
            (Statisztika.orszagokSzerintAutokSzama, 'Létezik-e a orszagokSzerintAutokSzama ?')
        );
    });

    QUnit.test('létezik-e az legregebbiAuto ?', function (assert) {
        assert.ok(
            (Statisztika.legregebbiAuto, 'Létezik-e az legregebbiAuto ?')
        );
    });

    QUnit.test('létezik-e a orszagokSzerintLegregebbiAuto ?', function (assert) {
        assert.ok(
            (Statisztika.orszagokSzerintLegregebbiAuto, 'Létezik-e a orszagokSzerintLegregebbiAuto ?')
        );
    });



});


QUnit.module('orszagokSzerintAutokSzama tesztelés', function (hooks) {
    let statisztika;
    hooks.before(() => {
        statisztika = new Statisztika();
    });

    QUnit.test('Üres lista', function (assert) {
        let adat = "";
        statisztika.lista = [{}, {}, {}],
            assert.equal(statisztika.orszagokSzerintAutokSzama(adat), "0");
    });

    QUnit.test('Van-e legalább 1 Buick auto a listában', function (assert) {
        let auto = "Buick";
        statisztika.lista = [
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
        ],
            assert.equal(statisztika.orszagokSzerintAutokSzama(auto), "0");
    });

    QUnit.test('Vannak-e USA országú autók a listában', function (assert) {
        let adat = "USA";
        statisztika.lista = [
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
        ],
            assert.equal(statisztika.orszagokSzerintAutokSzama(adat), "3");
    });

    QUnit.test('csak USA lista', function (assert) {
        let adat = "USA";
        statisztika.lista = [
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
        ],
            assert.equal(statisztika.orszagokSzerintAutokSzama(adat), "3");
    });

    QUnit.test('Van benne üres', function (assert) {
        let adat = " ";
        statisztika.lista = [
            {
                "auto": "Buick",

                "alapitas_ev": 1903
            },
            {
                "auto": "Cadillac",

                "orszag": "USA",
                "alapitas_ev": 1902
            },
            {
                "auto": "Chevrolet",

                "alapitas_ev": 1911
            },
        ],
            assert.equal(statisztika.orszagokSzerintAutokSzama(adat), "0");
    });

    QUnit.test('Vegyes országok ', function (assert) {
        let adat = "USA";
        statisztika.lista = [
            {
                "auto": "Buick",

                "orszag": "Magyar",
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
        ],
            assert.equal(statisztika.orszagokSzerintAutokSzama(adat), "2");
    });

    QUnit.test('van-e 1900-as évjáratú autú ', function (assert) {
        let adat = 1900;
        statisztika.lista = [
            {
                "auto": "Buick",

                "orszag": "Magyar",
                "alapitas_ev": 1900
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
        ],
            assert.equal(statisztika.orszagokSzerintAutokSzama(adat), "0");
    });

});


QUnit.module('legregebbiAuto tesztelés', function (hooks) {
    let statisztika;
    hooks.before(() => {
        statisztika = new Statisztika();
    });

    QUnit.test('Üres lista', function (assert) {
        statisztika.lista = [{}, {}, {}],
            assert.equal(statisztika.legregebbiAuto(), "0");
    });

    QUnit.test('Undefined van benne', function (assert) {
        let autok = [1903, undefined, 0];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.legregebbiAuto(), "2");
    });

    QUnit.test('alapítási év érzékelése', function (assert) {
        let autok = [1903, 200, 300];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.legregebbiAuto(), "1");
    });
    QUnit.test('CSak 0-ás értékek', function (assert) {
        let autok = [0, 0, 0];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.legregebbiAuto(), "0");
    });

    QUnit.test('Csak 1900 év felettiek', function (assert) {
        let autok = [1903, 1901, 1902];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.legregebbiAuto(), "1");
    });

    QUnit.test('Csak indefined', function (assert) {
        let autok = [undefined, undefined, undefined];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.legregebbiAuto(), "0");
    });

    QUnit.test('3-ál több évszám', function (assert) {
        let autok = [1903, 1923, 1956, 200];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.legregebbiAuto(), "3");
    });

    QUnit.test('középső értéke nem 0', function (assert) {
        let autok = [0, 1903, 0];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.legregebbiAuto(), "0");
    });

    QUnit.test('első értéke nem 0', function (assert) {
        let autok = [1903, 0, 0];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.legregebbiAuto(), "1");
    });

    QUnit.test('utolsó értéke nem 0', function (assert) {
        let autok = [0, 0, 1903];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.legregebbiAuto(), "0");
    });
});

QUnit.module(' orszagokSzerintLegregebbiAuto', function (hooks) {
    let statisztika;
    hooks.before(() => {
        statisztika = new Statisztika();
    });

    QUnit.test('Üres lista', function (assert) {
        statisztika.lista = [{}, {}, {}],
            assert.equal(statisztika.orszagokSzerintLegregebbiAuto(), "0");
    });

    QUnit.test('Undefined van benne', function (assert) {
        let autok = [{

            "orszag": undefined,
            "alapitas_ev": 1900
        },
        {

            "orszag": "USA",
            "alapitas_ev": 1902
        },];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.orszagokSzerintLegregebbiAuto(autok), "0");
    });

    QUnit.test('alapítási év érzékelése és USA autó', function (assert) {
        let autok = [{

            "orszag": "USA",
            "alapitas_ev": 1900
        },
        {

            "orszag": "USA",
            "alapitas_ev": 1902
        },];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.orszagokSzerintLegregebbiAuto(autok), "0");
    });
    QUnit.test('CSak 0-ás értékek', function (assert) {
        let autok = [{

            "orszag": "USA",
            "alapitas_ev": 0
        },
        {

            "orszag": "USA",
            "alapitas_ev": 0
        },];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.orszagokSzerintLegregebbiAuto(autok), "0");
    });

    QUnit.test('Csak 1900 év körüliek', function (assert) {
        let autok = [{

            "orszag": "USA",
            "alapitas_ev": 1900
        },
        {

            "orszag": "USA",
            "alapitas_ev": 1902
        },];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.orszagokSzerintLegregebbiAuto(autok), "0");
    });

    QUnit.test('Csak undefined', function (assert) {
        let autok = [{

            "orszag": undefined,
            "alapitas_ev": undefined
        },
        {

            "orszag": undefined,
            "alapitas_ev": undefined
        },
    ];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.orszagokSzerintLegregebbiAuto(autok), "0");
    });

    QUnit.test('3-ál több évszám', function (assert) {
        let autok = [{

            "orszag": "USA",
            "alapitas_ev": 1900
        },
        {

            "orszag": "USA",
            "alapitas_ev": 1902
        },
        {

            "orszag": "Magyar",
            "alapitas_ev": 1904
        },
        {

            "orszag": "USA",
            "alapitas_ev": 1905
        },
    ];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.orszagokSzerintLegregebbiAuto(autok), "0");
    });

    QUnit.test('középső értéke nem 0', function (assert) {
        let autok = [{

            "orszag": "USA",
            "alapitas_ev": 1900
        },
        {

            "orszag": "USA",
            "alapitas_ev": 0
        },
        {

            "orszag": "USA",
            "alapitas_ev": 1900
        },];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.orszagokSzerintLegregebbiAuto(autok), "0");
    });

    QUnit.test('első értéke nem 0', function (assert) {
        let autok = [{

            "orszag": "USA",
            "alapitas_ev": 0
        },
        {

            "orszag": "USA",
            "alapitas_ev": 1902
        },
        {

            "orszag": "USA",
            "alapitas_ev": 1900
        },];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.orszagokSzerintLegregebbiAuto(autok), "0");
    });

    QUnit.test('utolsó értéke nem 0', function (assert) {
        let autok = [{

            "orszag": "USA",
            "alapitas_ev": 1900
        },
        {

            "orszag": "USA",
            "alapitas_ev": 1900
        },
        {

            "orszag": "USA",
            "alapitas_ev": 0
        },];
        const AUTOK = new Statisztika(autok);
        assert.equal(AUTOK.orszagokSzerintLegregebbiAuto(autok), "0");
    });
});