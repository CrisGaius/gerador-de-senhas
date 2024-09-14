import generatePassword from "./gerador";

const formulario = document.querySelector('form')
const divNewPassword = document.querySelector('#senha-aleatoria')
const quantidadeCaracteres = document.querySelector('#qtd-caracteres')
const checkboxMaiusculas = document.querySelector('#checkbox-maiusculas')
const checkboxMinusculas = document.querySelector('#checkbox-minusculas')
const checkboxNumeros = document.querySelector('#checkbox-numeros')
const checkboxSimbolos = document.querySelector('#checkbox-simbolos')
const btnGerarSenha = document.querySelector('#botao-enviar')

export default () => {
  formulario.addEventListener('submit', (e) => e.preventDefault())

  btnGerarSenha.addEventListener('click', (e) => {
    const newPassword = generatePassword(quantidadeCaracteres.value, checkboxMaiusculas.checked, checkboxMinusculas.checked, checkboxNumeros.checked, checkboxSimbolos.checked) || 'Nada selecionado.'

    divNewPassword.innerText = `${newPassword}`
  })
}