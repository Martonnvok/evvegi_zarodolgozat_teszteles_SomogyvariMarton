class Aszinkron {
    adatBe(vegpont, callBack) {
        fetch(vegpont, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                callBack(data);
            })
            .catch((err) => console.log(err));
    }
}
export default Aszinkron;
