function clickMenu() {
    const itens = document.querySelector('#itens'); // Seleciona o menu
    if (itens.style.display === 'block') { // Verifica se o menu está visível
        // Se estiver visível, esconde o menu
        itens.style.display = 'none';
    }
    else { // Se não estiver visível, exibe o menu
        itens.style.display = 'block';
    }
}