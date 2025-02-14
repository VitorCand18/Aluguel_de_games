function alterarStatus(numero) {
    let elemento = document.getElementById("game-" + numero);

    // Verifica se o elemento existe
    if (elemento) {
        switch (numero) {
            case 1: // Verifica o caso para o botão 1
                if (elemento.classList.contains("dashboard__item__button")) {
                    elemento.classList.remove("");
                }
                break;

            case 2: // Verifica o caso para o botão 2
                if (elemento.classList.contains("dashboard__item__button")) {
                    // Realiza uma ação específica para o botão 2, se necessário
                    elemento.classList.add("dashboard__item__img--rented");
                }
                break;

            case 3: // Verifica o caso para o botão 3
                if (elemento.classList.contains("dashboard__item__button")) {
                    // Realiza uma ação específica para o botão 3, se necessário
                    elemento.classList.add("dashboard__item__img--rented");
                }
                break;

            default: // Caso não haja uma correspondência com os casos 1, 2, ou 3
                if (elemento.classList.contains("dashboard__item__button")) {
                    // Realiza uma ação padrão, se necessário
                    elemento.classList.add("dashboard__item__img--rented");
                }
                break;
        }
    }
}
