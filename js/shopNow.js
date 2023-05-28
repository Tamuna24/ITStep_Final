

fetch("data/products.json")
.then((res) => {
return res.json();
})
.then((data1) => {

  let data = "";
  data1.products.forEach(product => {
    data =data+`<div class="column `+product.type+`">
    <div class="content " >
      <img src="images/`+product.img+`" alt="Mountains" style="width:100%">
      <h4>`+product.title+ `` +product.price+`</h4>
      <p>`+product.description+`</p>
      <button onclick="addToCart(`+product.id+`)">Add to Cart</button>
    </div>
  </div>`
  });

  
  document.getElementById("productList").innerHTML=data;

}

);




function showAll() {
    let elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
    document.getElementsByClassName("tokopedia").style.backgroundColor="white";
    document.getElementsByClassName("tokopedia").style.color="black";
    document.getElementsByClassName("all").style.backgroundColor="#666";
    document.getElementsByClassName("all").style.color="white";
  }
  
  function tokopedia() {
    let elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
      console.log(elements[i])
      if (elements[i].classList.contains("tokopedia")) {
        console.log("la")
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    // document.getElementsByClassName("tokopedia").style.color="white";
    // document.getElementsByClassName("all").style.backgroundColor="white";
    // document.getElementsByClassName("all").style.color="black";
  }



  function balenciaga() {
    let elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("balenciaga")) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    document.getElementsByClassName("balenciaga").style.color="white";
    document.getElementsByClassName("all").style.backgroundColor="white";;
    document.getElementsByClassName("all").style.color="black";
  }



  function adidas() {
    let elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("adidas")) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    document.getElementsByClassName("addidas").style.color="white";
    document.getElementsByClassName("all").style.backgroundColor="white";
    document.getElementsByClassName("all").style.color="black";
  }



  function gucci() {
    let elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("gucci")) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    document.getElementsByClassName("gucci").style.color="white";
    document.getElementsByClassName("all").style.backgroundColor="white";
    document.getElementsByClassName("all").style.color="black";
  }



  function Bukalapak() {
    let elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("Bukalapak")) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
    document.getElementsByClassName("Bukalapak").style.color="white";
    document.getElementsByClassName("all").style.backgroundColor="white";
    document.getElementsByClassName("all").style.color="black";
  }










  let total = 0;
  
  function addToCart(productid) {
    let obj2=""
    fetch("data/products.json")
    .then((res) => {
    return res.json();
  })
.then((data1) => {

   obj2 = data1.products.find(o => o.id == productid);
   console.log(obj2)
  let obj1=localStorage.getItem("data")
  console.log(obj1)
  if(obj1==null){
    console.log(5)
    obj1=[]
  }else{
    obj1=JSON.parse(obj1)
  }


  obj1.push(obj2)
  // gadavaqcio isev jsondad
   localStorage.setItem("data",JSON.stringify(obj1))
    updateCart();
  });

  
}


  
  
  function checkout() {
    localStorage.getItem(obj.title)
  }
  