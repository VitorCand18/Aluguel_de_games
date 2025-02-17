function alterarStatus(numero) {
    let documentoSelecionado = document.getElementById("game-" + numero); // Pegando o ID das 3 opções no HTML
    let imagem = documentoSelecionado.querySelector('.dashboard__item__img'); // incluir um ('.') na frente para informar que é uma classe > DIV
    let botao = documentoSelecionado.querySelector('.dashboard__item__button') // Selecionar a classe incluida no botão > Botão    
    let nomeJogo = documentoSelecionado.querySelector('.dashboard__item__name') // Pegando a tag P

    alert(nomeJogo.textContent);
}
