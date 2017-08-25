let envia = document.querySelector('.envia')
envia.addEventListener('click', event => {
    
    let email = document.querySelector('.email')
        , senha = document.querySelector('.senha')

    createUser(email.value, senha.value)
    
})

function createUser(email, senha){

    let user = {
        email: email,
        senha: senha
    }

    return firebase.database().ref().child('users').push(user)
}

firebase.database().ref('users').on('value', snapshot => {

    let template = ''

    snapshot.forEach(user => {

        template += `<li class="list-group-item">${user.val().email} | ${user.val().senha}</li>`

    })

    document.querySelector('.listaUsuarios').innerHTML = template

})