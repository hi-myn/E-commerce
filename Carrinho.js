let carrinhoDeCompras = []
let idCount = 1

function adicionarItem(nome, qtd, preco, img) {
    const novoItem = {
        id: idCount,
        nome_produto: nome,
        qtd: qtd,
        preco: preco,
        img: img
    }
    idCount++;
    carrinhoDeCompras.push(novoItem)
    salvarCarrinhoNoLocalStorage()
    console.log(`Item ${nome} adicionado no carrinho`);
}

function removerItem(id) {
    const index = carrinhoDeCompras.findIndex(item => item.id === id)
    if (index !== -1) {
        const nomeRemovido = carrinhoDeCompras[index].nome_produto
        carrinhoDeCompras.splice(index, 1)
        salvarCarrinhoNoLocalStorage()
        console.log(`Item ${nomeRemovido} removido do carrinho`);
    } else {
        console.log("ID do item não encontrado!");
    }
}

function alterarQtd(id, novaQtd) {
    let item = carrinhoDeCompras.find(item => item.id === id)

    if (item) {
        item.qtd = novaQtd
        salvarCarrinhoNoLocalStorage()
        console.log(`Quantidade do item ${item.nome_produto} alterada para ${novaQtd}`);
    } else {
        console.log("ID do item não encontrado!");
    }
}

function salvarCarrinhoNoLocalStorage() {
    localStorage.setItem("carrinho", JSON.stringify(carrinhoDeCompras))
}

function carregarCarrinhoDoLocalStorage() {
    const carrinhoSalvo = localStorage.getItem('carrinho')
    if (carrinhoSalvo) {
        carrinhoDeCompras = JSON.parse(carrinhoSalvo)
    }
}