document.addEventListener('DOMContentLoaded', function () {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.querySelector('button');
    const itemList = document.getElementById('itemList');

    addButton.addEventListener('click', function () {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            adicionarItemNaLista(itemText);
            itemInput.value = '';
        }
    });

    function adicionarItemNaLista(texto) {
        const listItem = document.createElement('li');
        listItem.textContent = texto;
        itemList.appendChild(listItem);

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        listItem.appendChild(botaoRemover);

        botaoRemover.addEventListener('click', function () {
            itemList.removeChild(listItem);
        });
    }
});
