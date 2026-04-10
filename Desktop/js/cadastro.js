async function cadastrar(){
    let nome = document.getElementById("name-input").value
    let emailCpf = document.getElementById("email-cpf-input").value
    let senha = document.getElementById("password-input").value

    if(senha.length < 4){
        alert("senha fraca")
        return
    }

    let email = ""
    let cpf = ""

    if(emailCpf.includes("@")){
        email = emailCpf
    } else {
        cpf = emailCpf
    }

    let res = await window.api.register({ nome, email, cpf, senha })

    if(res.ok){
        alert("criado")
    }else{
        alert("erro ao criar")
    }
}
