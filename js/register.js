
function btnregister(ev){
  
    ev.preventDefault(); //used to prevent from submitting before being fully filled
    fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
        "userName": document.getElementById("userName").value,
        "firstName": document.getElementById("firstName").value,
        "lastName": document.getElementById("lastName").value,
        "email": document.getElementById("email").value,
        "privateNumber": document.getElementById("privateNumber").value,
        "password": document.getElementById("psw").value,
        "active": true})
    })
       .then(response => response.json())
       .then(response =>
        { console.log(JSON.stringify(response))
            window.location.replace("logIn.html")
        })


};

   
