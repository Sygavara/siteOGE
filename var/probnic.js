function check(){
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    if(login.value == "java" && password.value == "2017"){
        alert("Добро пожаловать !");
        location.replace("http://vk.com");
    }else{
        alert("Ошибка!");
    }
}