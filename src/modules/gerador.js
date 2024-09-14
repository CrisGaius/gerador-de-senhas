const random = (minimo, maximo) => Math.floor(Math.random() * (maximo - minimo) + minimo)

const maiusculaAleatoria = () => String.fromCharCode(random(65, 91))
const minusculaAleatoria = () => String.fromCharCode(random(97, 123))
const numeroAleatorio = () => String.fromCharCode(random(48, 58))
const simboloAleatorio = () => symbols[random(0, symbols.length)]

const symbols = '!@#$%¨&*()_+{}^`?:><,.;/]~[´=-'

export default function generatePassword(quantidade, maiusculas, minusculas, numeros, simbolos) {
  const senha = []
  quantidade = Number(quantidade)

  if (quantidade > 20) return 'Quantidade maior que a permitida.'
  if (quantidade <= 0) return 'Quantidade inferior a mínima.'

  let i = 0
  while (i < quantidade) {
    maiusculas && senha.push(maiusculaAleatoria())
    minusculas && senha.push(minusculaAleatoria())
    numeros && senha.push(numeroAleatorio())
    simbolos && senha.push(simboloAleatorio())
    i++
  }

  return senha.join('').slice(0, quantidade)
}
