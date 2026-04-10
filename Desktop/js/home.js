var email = localStorage.getItem("user")

if(!email){
    alert("não está logado")
    window.location.href = "index.html"
}

document.getElementById("user-email").innerText = email

function logout(){
    localStorage.removeItem("user")
    window.location.href = "index.html"
}
