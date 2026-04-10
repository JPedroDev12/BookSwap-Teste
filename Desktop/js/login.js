async function entrar(){
    let email = document.getElementById("email-cpf-input").value
    let senha = document.getElementById("password-input").value

    // ERRO CAIXA PRETA: sem .trim(), então "   " (só espaços) passa na validação
    // ERRO CAIXA BRANCA: usa == ao invés de ===
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
