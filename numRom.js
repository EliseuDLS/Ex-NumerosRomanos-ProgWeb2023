const resp = document.querySelector("h3")

function converter() {

  const valor = document.querySelector("#numRom").value
  romano_Decimal(valor.toUpperCase())
}

function romano_Decimal(numeroRomano) {
  const valoresRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let numeroDecimal = 0;

  for (let i = 0; i < numeroRomano.length; i++) {
    const listaRomanos = valoresRomanos[numeroRomano[i]];
    const proximoValorRomano = valoresRomanos[numeroRomano[i + 1]];

    if (proximoValorRomano && listaRomanos < proximoValorRomano) {
      numeroDecimal += proximoValorRomano - listaRomanos;
    } else {
      numeroDecimal += listaRomanos;
    }
  }
  
  resp.innerText = `O valor digitado, convetido para decimal é: ${numeroDecimal}`
}