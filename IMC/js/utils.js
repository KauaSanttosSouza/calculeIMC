export function notNumber(value) { // vai me retornar true ou false
      return isNaN(value) || value == "" // isNan() é um função que se o valor não for um numero da true, e se for um numero da false.
}

export function calcuteIMC(weight, height) {
      return (weight / ((height / 100) ** 2)).toFixed(2)
}