const botao = document.querySelector('#botao')
const tenteNovamente = document.querySelector('#tenteNovamente')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const input = document.querySelector('input')
const text2 = document.querySelector('.screen2 h2')
document.addEventListener('keydown', handleKeyDown)


let attempts = 1
let randomNumber = Math.round(Math.random()*10)


botao.addEventListener('click', handleTryClick)
tenteNovamente.addEventListener('click', handleResetClick)


function handleTryClick(event) {
  event.preventDefault()
  let myNumber = input.value
  
  if (Number(myNumber) == randomNumber){
    toggleScreen()
    text2.innerText = `Acertou em ${attempts} tentativas` 
  } else {
    alert('tente novamente')
    attempts += 1
  }
    
  input.value = ''   
  }
  
  
  function handleResetClick() {
    toggleScreen()
    attempts = 1
    input.value = ''
    randomNumber = Math.round(Math.random()*10)
  }
  
  
  function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
  }

  function handleKeyDown(e) {
    if ((e.key == "Enter") && (screen1.classList.contains('hide'))) {
      handleResetClick()
    }
  }