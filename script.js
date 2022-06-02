var div=document.createElement("div");
div.innerHTML=`<input type="text"  id="txt">
<button type="button" onclick="foo()">Search</button>`;

div.style.textAlign="center";
document.body.append(div);

var section=document.createElement("section");
section.setAttribute("class" , "container");





async function foo(){

   let cc=document.getElementById("txt").value; 
   if(cc!== ""){  
      console.log("entered if...")
   console.log(cc);
   let res= await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${cc}`);
   let res1=await res.json();
   console.log(res1);
   
   for(var i=0;i<res1.length;i++){
      
      var innerdiv=document.createElement("div");
      innerdiv.setAttribute("class" , "innerdiv")
   innerdiv.innerHTML=`<img id="image_link" src="${res1[i].image_link}"> <div id="brand">${res1[i].brand}</div> 
   <div id="name">${res1[i].name}</div>
 <div id="price">${res1[i].price}</div> 
<div id="product_link">${res1[i].product_link}</div> 
<div id="description">${res1[i].description}</div>`;
section.append(innerdiv);
   // document.getElementById("brand").innerText=`brand:${result}`;
   }
document.body.append(section)

   }
}

// foo();




   



   
   



