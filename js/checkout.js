function getDataChechOut(){
  let mydata = JSON.parse(localStorage.getItem("data"))
  console.log(mydata)
  if(mydata!=null){
    console.log(mydata)
  
      let data="";
      mydata.forEach(product => {
        data =data+`<div class="column `+product.type+`">
        <div class="content " >
          <img src="images/`+product.img+`" alt="Mountains" style="width:100%">
          <h4>`+product.title+ `` +product.price+`</h4>
          <p>`+product.description+`</p>
          <h2 onclick="delete1(`+product.id+`)" id="delete" class="close">delete</h2>
        </div>
      </div>`
    });
    
      document.getElementById("checkOut1").innerHTML=data;
    
  }
 
}

getDataChechOut();



function delete1(productid) {

  let obj2=""
let obj1=localStorage.getItem("data")
console.log(obj1)
if(obj1==null){
  obj1=[]
}else{
  obj1=JSON.parse(obj1)
  obj1=obj1.filter(function(el) { return el.id != productid; }); 
  localStorage.setItem("data",JSON.stringify(obj1))
  getDataChechOut();
}

}
  
