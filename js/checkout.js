let data1=JSON.parse(localStorage.getItem("data"))
let data=""
data1.forEach(product => {
    data =data+`<div class="column `+product.type+`">
    <div class="content " >
      <img src="images/`+product.img+`" alt="Mountains" style="width:100%">
      <h4>`+product.title+ `` +product.price+`</h4>
      <p>`+product.description+`</p>
      <h2 onclick="delete1()" class="close">delete</h2>
    </div>
  </div>`
  });



  
  document.getElementById("checkOut1").innerHTML=data;



  function delete1(){
    let item=localStorage.getItem("data")
    item.style.display="none"
  }
