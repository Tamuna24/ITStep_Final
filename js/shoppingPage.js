document.getElementById("welcome").innerHTML="welcome "+localStorage.getItem("name")+" !"




let modal1 = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("Fashion");
let modalImg1 = document.getElementById("img01");
let captionText1 = document.getElementById("caption1");
function imgClick1(){
  modal1.style.display = "block";
  modalImg1.src = img.src;
  captionText1.innerHTML = img.alt;
}


let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal1.style.display = "none";
}



let modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img2 = document.getElementById("skincareNums");
let modalImg2 = document.getElementById("img02");
let captionText2 = document.getElementById("caption2");
function imgClick2(){
  modal2.style.display = "block";
  modalImg2.src = img.src;
  captionText2.innerHTML = img.alt;
}


let span2 = document.getElementsByClassName("close")[1];

span2.onclick = function() { 
  modal2.style.display = "none";
}