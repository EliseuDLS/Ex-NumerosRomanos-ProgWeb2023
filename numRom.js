const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    e.preventDefault();
    console.log("e.target.value");

    const numRom = String(frm.numRom.value.toUpperCase());
    var numeroDecimal = 0;
    const valoresRomanos = new Map();

    valoresRomanos.set("I", 1);
    valoresRomanos.set("V", 5);
    valoresRomanos.set("X", 10);
    valoresRomanos.set("L", 50);
    valoresRomanos.set("C", 100);
    valoresRomanos.set("D", 500);
    valoresRomanos.set("M", 1000);

    console.log(valoresRomanos);

    for (var i = 0; i < numRom.length; i++) {
        var x = valoresRomanos.get(numRom[i])
        var y = valoresRomanos.get(numRom[i + 1])

        console.log(x, y);
        if (y && x < y) {
            numeroDecimal += y - x;
            i++;
        } else {
            numeroDecimal += x;
        }
    }

    resp.innerText = `O valor digitado, convetido para decimal é: ${numeroDecimal}`
});
