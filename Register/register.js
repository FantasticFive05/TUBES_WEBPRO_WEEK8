function cekSemua(){
    var name = document.getElementById("nama").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    // Nama
    if(!(name.match(/^[a-zA-Z ]*$/)))
    {
        alert("Masukkan nama yang benar");
        document.getElementById("nama").style.backgroundColor = "#db7f7f";
    }else if(name == ""){
        alert("Nama tidak boleh kosong");
        document.getElementById("nama").style.backgroundColor = "#db7f7f";
    }else{
        document.getElementById("nama").style.backgroundColor = "white";
    }

    // Username
    if(username.length < 4){
        alert("Username tidak boleh kurang dari 4 kata");
        document.getElementById("username").style.backgroundColor = "#db7f7f";
    }else if(username == ""){
        alert("Username tidak boleh kosong");
        document.getElementById("username").style.backgroundColor = "#db7f7f";
    }else{
        document.getElementById("username").style.backgroundColor = "white";
    }

    // Email
    if(!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))){
        alert("Masukkan email yang benar");
        document.getElementById("email").style.backgroundColor = "#db7f7f";
    }else if(email == ""){
        alert("Email tidak boleh kosong");
        document.getElementById("email").style.backgroundColor = "#db7f7f";
    }
    else{
        document.getElementById("email").style.backgroundColor = "white";
    }

    // Password
    if(pwd.length < 7){
        alert("Password terlalu pendek");
        document.getElementById("pwd").style.backgroundColor = "#db7f7f";
    }
    else{
        document.getElementById("pwd").style.backgroundColor = "white";
    }
}