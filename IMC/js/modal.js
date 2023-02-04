export const Modal = { // colocamos a tag export para conseguirmos exportar para o script.js, tudo que tem alguma ligação com essa variavel sera exportado
      container: document.querySelector('.modal-container'),
      message: document.querySelector('.modal .tittle span'), // desfazemos algumas variaveis e colocamos dentro de uma unica varialvel, para ficar mais facil de se ler o código depois
      buttonClose: document.querySelector('.modal .tittle button'),

      open() { 
            Modal.container.classList.add('open') // inserir class
      },
      close() {
            Modal.container.classList.remove('open') // Podemos usar a variavel, dentro dela própria
      }
}

Modal.buttonClose.onclick = () => { // para remover a janela de imc clicando no botão
      Modal.close()
}

window.addEventListener('keydown', (event) => { 
      if (event.key === 'Escape') {
            Modal.close()
      }
})
