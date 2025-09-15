

const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.querySelectorAll('.propriedades').forEach(produto => {
  const btnAumentar = produto.querySelector('.aumentar');
  const btnDiminuir = produto.querySelector('.diminuir');
  const quantidadeSpan = produto.querySelector('.quantidade');

  let quantidade = 1;

  btnAumentar.addEventListener('click', () => {
    quantidade++;
    quantidadeSpan.textContent = quantidade;
  });

  btnDiminuir.addEventListener('click', () => {
    if (quantidade > 1) {
      quantidade--;
      quantidadeSpan.textContent = quantidade;
    }
  });
});


function exibir() {
  const beneficios = document.querySelector('#beneficios');
  const btnExibir = beneficios.querySelector('.btnSaibaMais');
  const artigo = document.querySelector('#saiba-mais');

  btnExibir.addEventListener('click', () => {
    artigo.classList.toggle('visivel'); // adiciona/remove a classe
    artigo.classList.toggle('oculto');
  });
}
exibir();


