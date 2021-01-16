const darkWhite = document.querySelector('.dark__white');
const botao = document.querySelector('.botao');
const element = document.querySelector('.dark');

darkWhite.addEventListener('click', () => {
  if(window.getComputedStyle(botao).right === '6px') {
    botao.style.right = "45%";
    darkWhite.classList.add('white');
    botao.classList.remove('white');
    element.classList.add('white');
  }

  if(window.getComputedStyle(botao).right === '54px'){ 
    botao.style.right = "5%";
    darkWhite.classList.remove('white');
    botao.classList.add('white');
    element.classList.remove('white');
  }
})