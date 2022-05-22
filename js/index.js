/* 
 OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 

 - retirar a classe selecionado do personagem que está selecionado


 OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
  
    personagem.addEventListener("mouseenter", () => {
    const idSelecionado = personagem.attributes.id.value;
    console.log(idSelecionado)
    
    const imagemJogador = document.getElementById("personagem-grande");
    imagemJogador.src = `./imagens/${idSelecionado}.png`;

    if(idSelecionado == 'Zephyrmonf'){
      imagemJogador.src = `./imagens/${idSelecionado}.webp`;
    }
    console.log('imagem trocada')
    
    const audio = document.getElementById('audio').play()

    const nomeDigimon = document.getElementById('nome-digimon');
    const nomeSelecionado = personagem.getAttribute('data-name');
    console.log(nomeSelecionado)
  
    nomeDigimon.innerHTML = nomeSelecionado;
  })

    
})



