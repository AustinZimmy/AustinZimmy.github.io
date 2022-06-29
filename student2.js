var companyname4 = "Book"; 
var address4 = "269 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 861-1234";
var imgurl797 = "http://college1.com/images/";
var cardimgurl247 = "http://college1.com/images/cards/gbCard";

//---------------------------------------------------------------------------

var product1 = { name:"HP 4426", id:"4426", desc:"Newest and Best Laptop from HP Computer"};
var product2 = { name:"Apple 88123 iPad", id:"88123", desc:"Apple Tablet Computer"};
var product3 = { name:"Dell Dimension 2400", id:"2400X", desc:"A fast 2.4 ghz computer"};


//---------------------------------------------------------------------------

function makeMenu4(myproduct){
var msg = "<table style='margin-left:auto; margin-right:auto; border:3px solid gold; width:40%; background-color:gray; text-align:center; color:white; font-size:24px'><tr><td>Menu:</td>";
 msg += "<td  id = 'button1'><button onClick='myproduct = product1; myexecButton453(myproduct)'>Product1</button> </td>";
 msg += "<td id = 'button2'><button onClick='myproduct = product2;execButton453(myproduct)'>Product2</button>  </td>";
 msg += "<td id = 'button3'><button onClick='myproduct = product3;execButton453(myproduct)'>Product3</button> </td>";
 msg += "<td id = 'button4'><button onClick='dealCards412()'>Deal Cards</button> ";
 msg += "</td></tr></table>";
 return(msg);
}

function execButton453(myproduct){ 
document.getElementById('button1').innerHTML = makeMain2(myproduct);
document.getElementById('button2').innerHTML = makeMain2(myproduct);
document.getElementById('button3').innerHTML = makeMain2(myproduct);
document.getElementById('button4').innerHTML = dealCards412();
}



function makeMain2(myproduct){
this.myproduct = myproduct;
var produrl = imgurl797 + myproduct.id + ".gif";
 var data = "<p style='text-align:left; color:black'>";
     data += "<h1>My Product:</h1>";
     data += "Product Name: " + myproduct.name + "<br>"; 
     data += "Product ID: " + myproduct.id + "<br>"; 
     data += "Product Description: " + myproduct.desc + "<br>"; 
     data += "Shopping Cart Link Bar <br>"; 
     data += "Product Image: <img src='imgurl797' height=100 width=100></a>"; 
     data += "</p>";
     return(data); 
}

function dealCards412(){
  var whichcard = Math.floor(Math.random() * 1000) % 52; 
  var imagesrc = cardimgurl247 + whichcard + ".gif";
   document.getElementById("card0").src=imagesrc;

   whichcard = Math.floor(Math.random() * 1000) % 52; 
   imagesrc= cardimgurl247 + whichcard + ".gif";
   document.getElementById("card1").src=imagesrc;

 var data = "<p style='text-align:left; color:black'>";
 data += "<table border=0 ><tr><td>"; 
 data += "<button type="button" onClick="Javascript:deal()">Deal --></button></td><td>"; 
 data += "<img id='card0' src="https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif"></td><td>"; 
 data += "<img id='card1' src="https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif"></td>"; 
  data += "<img id='card2' src="https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif"></td>"; 
   data += "<img id='card3' src="https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif"></td>"; 
    data += "<img id='card4' src="https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif"></td></tr></table> "; 
}


//----------------------------------------------------------------------------

function getHeader(){
  var now = new Date();
  var data = "<table style='width:100%; text-align:center; color:gold; background-color:gray'>";
  data += "<tr style='text-align:right'><td>" + now.toLocaleString() + "</td></tr>";
  data +="<tr style='text-align:center'><td><h1>Zimmy's Books - Grand Opening Discounts!</h1>";
  data +="</td></tr></table>";
  return(data);
}

function getFooter(companyname4, address4, phonenumber5){
     var data = "<table style='width:100%; background-color:gray; text-align:center; color:gold'><tr style='text-align:center'><td>";
     data += navigator.appName  + "</td></tr>";
     data += "<tr style='text-align:center'><td>" + navigator.appVersion  + "</td></tr>"; 
     data += "<tr style='text-align:center'><td>" + navigator.platform; 
     data += "</td></tr></table>";
     return(data); 
}