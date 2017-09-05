let envia = document.querySelector('.envia')
envia.addEventListener('click', event => {
    
    let nome = document.querySelector('.nome')
        , preco = document.querySelector('.preco')

    createProduto(nome.value, preco.value)
    
})

function createProduto(nome, preco){

    let produto = {
        nome,
        preco
    }

    return firebase.database().ref().child('produtos').push(produto)
}

firebase.database().ref('produtos').on('value', snapshot => {
    let template = ''

    snapshot.forEach(produto => {
        template += `<li class="list-group-item">${produto.val().nome} | ${produto.val().preco}</li>`
    })

    document.querySelector('.listaProdutos').innerHTML = template
})