function alterarStatus(numero) {
    let documentoSelecionado = document.getElementById("game-" + numero); // Pegando o ID das 3 opções no HTML
    let imagem = documentoSelecionado.querySelector('.dashboard__item__img'); // incluir um ('.') na frente para informar que é uma classe > <div>
    let botao = documentoSelecionado.querySelector('.dashboard__item__button') // Selecionar a classe incluida no botão > <a>

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        devolverJogo(numero); // Passando o número do jogo para a função
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }
}

function devolverJogo(numero){
    let documentoSelecionado = document.getElementById("game-" + numero); // Pegando o ID das 3 opções no HTML
    let imagem = documentoSelecionado.querySelector('.dashboard__item__img'); // Pegando a imagem
    let botao = documentoSelecionado.querySelector('.dashboard__item__button'); // Pegando o botão
    let nome = documentoSelecionado.querySelector('.dashboard__item__name'); // Pegando o nome do jogo

    let resposta = confirm(`Deseja devolver o jogo ${nome.textContent}?`); // Corrigi a forma de pegar o nome (adicionando `.textContent`)

    if (resposta) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
    } else {
        alterarStatus(numero); // Passando o número
    }
}
