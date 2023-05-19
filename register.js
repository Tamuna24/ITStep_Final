document.getElementById("reg-form").addEventListener("registerbtn", function(event){
    event.preventDefault(); //used to prevent from submitting before being fully filled

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;
    let pswRepeat= document.getElementById("pswRepeat").value;


    var user = {
        username: username,
        email: email,
        password: psw,
        passwordRepeat: pswRepeat
      };

      localStorage.setItem(username, JSON.stringify(user));

      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("psw").value = "";
      document.getElementById("pswRepeat").value = "";

    });

      


function registerbtn(){
    if(username && email && psw && pswRepeat){
        window.location.replace = "index.html";
    }else{
        window.location.replace = "error.html";
    }
    
}