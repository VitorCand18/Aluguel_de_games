function alterarStatus(numero) {
    let documentoSelecionado = document.getElementById("game-" + numero); // Pegando o ID das 3 opções no HTML
    let imagem = documentoSelecionado.querySelector('.dashboard__item__img'); // incluir um ('.') na frente para informar que é uma classe > <div>
    let botao = documentoSelecionado.querySelector('.dashboard__item__button') // Selecionar a classe incluida no botão > <a>

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }
}
