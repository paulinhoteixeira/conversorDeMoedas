// Código conforme demonstrado pelos professores da Alura
/*let valorEmDolar = parseFloat(prompt("Digite o valor em dolar!"))

let valorEmReal = (valorEmDolar * 5.50).toFixed(2)


alert(valorEmReal)

*/

//Código desenvolvido por mim para digitar e exibir os valores na própira tela
let valorDigitado = 0;
function capturar () {
    valorDigitado = document.getElementById("dolarDigitado").value;
    valorDigitado = parseFloat(valorDigitado.replace(',','.'))
    let valorEmReal = (valorDigitado * 5.50).toFixed(2).replace(".",",")
    document.getElementById("valorEmReal").innerHTML = "R$" + valorEmReal;
}

