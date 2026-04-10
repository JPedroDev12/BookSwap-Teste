
async function login(){
    let email = document.getElementById("email-cpf-input").value
    let senha = document.getElementById("senha-input").value

    let r = await window.api.login({email, senha})

    if(r.ok){
        alert("logado")
    }else{
        alert("erro")
    }
}

async function register(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    let r = await window.api.register({email, senha})

    if(r.ok){
        alert("criado")
    }else{
        alert("erro")
    }
}
