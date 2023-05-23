fetch("data/products.json")
.then((res) => {
return res.json();
})
.then((data) => {

  let data = ""
  data.products.forEach(product => {
    data=data+ ` <div class="column tokopedia">
    <div class="content">
      <img src="images/tokopedia/`+tokopedia1.jpg+`" alt="Mountains" style="width:100%">
      <h4>`++`IPX8 Waterproof & Sweatproof $123.99</h4>
      <p>Nano-coating surface protects your earbuds from rain and sweat.</p>
      <button onclick="addToCart(`+product.id+`)">Add to Cart</button>
    </div>
  </div>`
  });
  document.getElementById("productList").innerHTML=data
  console.log(data)}

);


function showAll() {
    var elements = document.getElementsByClassName("column");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
    document.getElementById("tokopedia").style.backgroundColor="white"
    document.getElementById("tokopedia").style.color="black"
    document.getElementById("all").style.backgroundColor="#666"
    document.getElementById("all").style.color="white"
  }
  
  function tokopedia() {
    var elements = document.getElementsByClassName("column");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("tokopedia")) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    document.getElementById("tokopedia").style.color="white"
    document.getElementById("all").style.backgroundColor="white"
    document.getElementById("all").style.color="black"
  }



  function balenciaga() {
    var elements = document.getElementsByClassName("column");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("balenciaga")) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    document.getElementById("balenciaga").style.color="white"
    document.getElementById("all").style.backgroundColor="white"
    document.getElementById("all").style.color="black"
  }



  function adidas() {
    var elements = document.getElementsByClassName("column");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("adidas")) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    document.getElementById("addidas").style.color="white"
    document.getElementById("all").style.backgroundColor="white"
    document.getElementById("all").style.color="black"
  }



  function gucci() {
    var elements = document.getElementsByClassName("column");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("gucci")) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    document.getElementById("gucci").style.color="white"
    document.getElementById("all").style.backgroundColor="white"
    document.getElementById("all").style.color="black"
  }



  function Bukalapak() {
    var elements = document.getElementsByClassName("column");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("Bukalapak")) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    document.getElementById("Bukalapak").style.color="white"
    document.getElementById("all").style.backgroundColor="white"
    document.getElementById("all").style.color="black"
  }










  let cartItems = [];
  let total = 0;
  
  function addToCart(productName) {
    cartItems.push(productName);
    total += getProductPrice(productName);
    updateCart();
  }
  
  function updateCart() {
    let cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
  
    cartItems.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      cartItemsElement.appendChild(li);
    });
  
    document.getElementById('total').textContent = 'Total: $' + total;
  }
  
  function getProductPrice(productName) {
    return 10;
  }
  
  function checkout() {
    alert('Thank you for your purchase!');
    cartItems = [];
    total = 0;
    updateCart();
  }
  