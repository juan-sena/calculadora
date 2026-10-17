const botones = document.querySelectorAll("button");
const resultado = document.querySelector("#resultado");

let primerNumero;
let segundoNumero;
let operador;

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const valor = boton.textContent;

    console.log(valor);

    // BOTÓN C: limpiar
    if (valor === "C") {
      resultado.textContent = "0";

      primerNumero = undefined;
      segundoNumero = undefined;
      operador = undefined;

      return;
    }

    // BOTÓN X: borrar último número
    if (valor === "X") {
      resultado.textContent = resultado.textContent.slice(0, -1);

      if (resultado.textContent === "") {
        resultado.textContent = "0";
      }

      return;
    }

    // OPERADORES
    if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
      primerNumero = Number(resultado.textContent);
      operador = valor;

      resultado.textContent = "0";

      return;
    }

    // PORCENTAJE
    if (valor === "%") {
      resultado.textContent = Number(resultado.textContent) / 100;

      return;
    }

    // PUNTO DECIMAL
    if (valor === ".") {
      if (!resultado.textContent.includes(".")) {
        resultado.textContent += ".";
      }

      return;
    }

    // IGUAL
    if (valor === "=") {
      if (primerNumero === undefined || operador === undefined) {
        return;
      }

      segundoNumero = Number(resultado.textContent);

      let resultadoOperacion;

      if (operador === "+") {
        resultadoOperacion = primerNumero + segundoNumero;
      }

      if (operador === "-") {
        resultadoOperacion = primerNumero - segundoNumero;
      }

      if (operador === "*") {
        resultadoOperacion = primerNumero * segundoNumero;
      }

      if (operador === "/") {
        if (segundoNumero === 0) {
          resultado.textContent = "Error";
          return;
        }

        resultadoOperacion = primerNumero / segundoNumero;
      }

      resultado.textContent = resultadoOperacion;

      primerNumero = resultadoOperacion;
      segundoNumero = undefined;
      operador = undefined;

      return;
    }

    // NÚMEROS
    if (resultado.textContent === "0") {
      resultado.textContent = valor;
    } else {
      resultado.textContent = resultado.textContent + valor;
    }
  });
});
