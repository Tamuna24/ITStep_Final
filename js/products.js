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
