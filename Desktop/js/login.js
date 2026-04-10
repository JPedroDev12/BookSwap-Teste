async function entrar(){
    let email = document.getElementById("email-cpf-input").value
    let senha = document.getElementById("password-input").value

    if(email == "" || senha == ""){
        alert("preenche ai")
        return
    }

    let res = await window.api.login({ email, senha })

    if(res.ok){
    localStorage.setItem("user", email)
    window.location.href = "home.html"
}
    else{
        alert("erro")
    }
}
