let envia = document.querySelector('.envia')
envia.addEventListener('click', event => {
    
    let email = document.querySelector('.email')
        , senha = document.querySelector('.senha')

    authUser(email.value, senha.value)
    
})

let logout = document.querySelector('.logout')
logout.addEventListener('click', event => firebase.auth().signOut())

function authUser(email, senha) {
    firebase.auth().signInWithEmailAndPassword(email, senha)
        .catch(error => console.log(error.message))
        .then(res => console.log('usuário autenticado!')) 
}

firebase.auth().onAuthStateChanged(user => user ? console.log('logado') : console.log('deslogado'))