function entrarnosite() {
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value

    if(login == "admin" && senha == "admin"){
       window.location.href = 'dashboard.html'
            }else{
         alert('Login inválido')        
    }
}