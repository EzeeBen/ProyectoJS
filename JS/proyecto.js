let totalCalculado = 0;
let buffer = "0";
let operacionAnterior;

const pantalla = document.querySelector(".pantalla");

function clickBtn(valor) {
  if (isNaN(valor)) {
    tomaOperador(valor);
  } else {
    tomaNumero(valor);
  }
  pantalla.innerText = buffer;
}

function tomaOperador(operador) {
  switch (operador) {
    case "C":
      buffer = "0";
      totalCalculado = 0;
      break;
    case "=":
      if (operacionAnterior === null) {
      return;
      }
      limpiarOperacion(parseInt(buffer));
      operacionAnterior = null;
      buffer = totalCalculado;
      totalCalculado = 0;
      break;
    case "←":
      if(buffer.length ===1){
        buffer= "0";
      }
      else{
        buffer= buffer.substring(0, buffer.
        length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      cuenta(operador);
      break;
  }
}

function cuenta(operador){
  if(buffer === "0"){
    return;
  }

  const bufferNoVisible= parseInt(buffer);
  if(totalCalculado === 0){
    totalCalculado = bufferNoVisible;
  }
  else{
    limpiarOperacion(bufferNoVisible);
  }
  operacionAnterior=operador;
  buffer= "0";
}

function limpiarOperacion(bufferNoVisible){
  if(operacionAnterior === "+"){
    totalCalculado += bufferNoVisible;
  }
  else if(operacionAnterior === "−"){
    totalCalculado -= bufferNoVisible;
  }
  else if(operacionAnterior === "×"){
    totalCalculado *= bufferNoVisible;
  }
  else if(operacionAnterior === "÷"){
    totalCalculado /= bufferNoVisible;
  }
}

function tomaNumero(numeros){
  if(buffer === "0"){
    buffer = numeros;
  }
  else{
    buffer += numeros;
  }
}

function inicio(){
  document.querySelector(".calc-btns").addEventListener("click", function(event){
    clickBtn(event.target.innerText);
  })
}

inicio();