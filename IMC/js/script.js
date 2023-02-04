import { Modal } from "./modal.js" // essas linha de codigo é para exportarmos a variavel do modal
import { alertError } from "./alert-error.js"
import { calcuteIMC, notNumber} from "./utils.js"

// variaveis - varibles
const form = document.querySelector('form') // Buscamos o form todo o form do html
const inputWeigth = document.querySelector('#weight') // buscamos o input no html, mas não nos da o valor assim. precisamos colocar o .value
const inputheigth = document.querySelector('#height')

inputWeigth.oninput = () => alertError.close() // para fechar quando começa a digitar
inputheigth.oninput = () => alertError.close()
form.onsubmit = (event) => { // onsubmit busca o click do botão dentro do formulario com a opção de submit
      event.preventDefault() // nega a função padrão do código
      
      const weight = inputWeigth.value // peguei o valor do input
      const height = inputheigth.value
      
      const weightOrheighIsNotANumber = notNumber(weight) || notNumber(height) //se um dos dois for true, me retornara true, se forem false, me retornaram false
      if (weightOrheighIsNotANumber) { // Se a reposta for false, eu entro nesse if
            alertError.open() // vai abrir o alert error
            return;
      }

      alertError.close() // vai fechar o alert error
      const result = calcuteIMC(weight, height)
      displayResultMessage(result)
}

function displayResultMessage(result) {
      const message = `Seu IMC é de ${result}`
      
      Modal.message.innerHTML = message // inserir texto
      Modal.open()
}





