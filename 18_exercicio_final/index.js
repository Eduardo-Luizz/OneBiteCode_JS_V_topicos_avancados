function renderTransactions(transactionData) {
    const transaction = document.createElement('article')
    transaction.classList.add('transaction')
    transaction.id = `transaction-${transactionData.id}`

    const name = document.createElement('p')
    name.classList.add('transaction-name')
    name.textContent = transactionData.name

    const value = document.createElement('p')
    value.classList.add('transaction-value')
    value.innerHTML = transactionData.value

    const editButton = document.createElement('button');
    editButton.classList.add('transaction-edit');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => {
        exibirFormularioEdicao(transactionData)
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('transaction-delete');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => {
        deletarTransacao(transactionData.id)
    });

    transaction.append(name, value, editButton, deleteButton);
    document.querySelector('#transactions').appendChild(transaction);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTransactions()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const transactionData = {
        name: document.querySelector('#name').value,
        value: document.querySelector('#value').value
    }

    const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    })

    const savedTransaction = await response.json()
    form.reset()
    renderTransactions(savedTransaction)

    // Atualizar o valor total após adicionar uma transação
    const transactions = await fetchTransactions();
    atualizarValorTotal(transactions);
})

async function deletarTransacao(id) {
    await fetch(`http://localhost:3000/transactions/${id}`, {
        method: 'DELETE',
    })
    const transactions = await fetchTransactions(); // Atualizar transações e valor total
    atualizarValorTotal(transactions);
}

function exibirFormularioEdicao(transactionData) {

    const form = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = transactionData.name;

    const valueInput = document.createElement('input');
    valueInput.type = 'number';
    valueInput.value = transactionData.value;

    form.appendChild(nameInput);
    form.appendChild(valueInput);

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Atualizar';
    updateButton.addEventListener('click', () => {
        const updatedTransaction = {
            id: transactionData.id,
            name: nameInput.value,
            value: valueInput.value,
        };
        atualizarTransacao(updatedTransaction);
    });

    form.appendChild(updateButton);

    const transactionElement = document.getElementById(`transaction-${transactionData.id}`);
    transactionElement.innerHTML = '';
    transactionElement.appendChild(form);
}

async function atualizarTransacao(transactionData) {
    const { id, name, value } = transactionData;

    await fetch(`http://localhost:3000/transactions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, value }),
    })
    const transactions = await fetchTransactions(); // Atualizar transações e valor total
    atualizarValorTotal(transactions);
}

function calcularTotal(transactions) {
    let total = 0;
    for (const transaction of transactions) {
        const value = parseFloat(transaction.value);
        if (!isNaN(value)) {
            total += value;
        }
    }
    return total.toFixed(2);
}

function atualizarValorTotal(transactions) {
    const totalValueElement = document.getElementById('total-value');
    const total = calcularTotal(transactions);
    totalValueElement.textContent = `R$ ${total}`;
}

function renderizarTotal(transactions) {
    const totalValueElement = document.getElementById('total-value');
    const total = calcularTotal(transactions);
    totalValueElement.textContent = `R$ ${total}`;
}

async function fetchTransactions() {
    const transactions = await fetch("http://localhost:3000/transactions").then(res => res.json())
    atualizarValorTotal(transactions)
    limparTransacoes(); // Limpa transações existentes
    transactions.forEach(renderTransactions);
    return transactions;
}

function limparTransacoes() {
    const transactionsContainer = document.querySelector('#transactions');
    transactionsContainer.innerHTML = '';
}