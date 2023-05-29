fetch("data/products.json")
.then((res) => {
return res.json();
})
.then((data1) => {
  let data="";
  data1.products.forEach(product => {
    data =data+`<div class="column `+product.type+`">
    <div class="content " >
      <img src="images/`+product.img+`" alt="Mountains" style="width:100%">
      <h4>`+product.title+ `` +product.price+`</h4>
      <p>`+product.description+`</p>
      <h2 onclick="delete1(`+product.id+`)" class="close">delete</h2>
    </div>
  </div>`
});

  document.getElementById("checkOut1").innerHTML=data;

});


function delete1(productid) {
  let obj2=""
let obj1=localStorage.getItem("data")
console.log(obj1)
if(obj1==null){
  obj1=[]
}else{
  obj1=JSON.parse(obj1)
}


obj1.push(obj2)
// gadavaqcio isev jsondad
 localStorage.removeItem("data",JSON.stringify(obj1))

}
  
