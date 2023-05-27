function logIn1(event){   
  event.preventDefault(); //used to prevent from submitting before being fully filled
  fetch('https://kketelauri-001-site1.gtempurl.com/api/user/login', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
      "email": document.getElementById("email").value,
      "password": document.getElementById("password").value})
  })
     .then(response => response.json())
     .then(response => {
        console.log(JSON.stringify(response))
        localStorage.setItem("name",response.userName)
        window.location.replace("shoppingPage.html")
     })

};