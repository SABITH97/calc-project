var operator=0;
var operaterisclicked =false;
var oldvalue=0;
var newvalue=0;
var result=0;
//
let output='';
//adding sound to button
var soundwrong = new Audio('wrong.mp3');

//number button working
function btnclick(val){
    console.log(val);
  if(operaterisclicked){
    document.getElementById("display").value=val;
    operaterisclicked=false;
  }else{
    document.getElementById("display").value=document.getElementById("display").value+val
  }
}
//how the operater works
function operaterclicker(operateris){
    console.log(operateris);
    if (operateris== '+') {
        operaterisclicked=true;
        oldvalue=document.getElementById("display").value
        console.log("oldvalue="+oldvalue)
        document.getElementById("display").value =("")
        operator=1;
        
    }
    if (operateris=="-") {
        operaterisclicked=true;
        oldvalue=document.getElementById("display").value
        console.log("oldvalue="+oldvalue)
        document.getElementById("display").value=''
        operator=2;
        
    }
    if (operateris=="/") {
        operaterisclicked=true;
        oldvalue=document.getElementById("display").value
        console.log("oldvalue="+oldvalue)
        document.getElementById("display").value=''
        operator=3;
        
    }
    if (operateris=="*") {
        operaterisclicked=true;
        oldvalue=document.getElementById("display").value
        console.log("oldvalue="+oldvalue)
        document.getElementById("display").value=''
        operator=4;
        //i know delete button is not a opretor  //working of delete button
    }if (operateris=="del"){
        
        output=document.getElementById("display").value.slice(0,-1);
        document.getElementById("display").value=output;
    }
}
//how the clear button work

function clearscreen(){
    document.getElementById ("display").value="";
}


//how the equel button work

function equlclick(){
   newvalue=document.getElementById ("display").value;
   console.log("newvalue="+newvalue)
   var newvalue1=parseFloat(newvalue);
   var oldvalue1=parseFloat(oldvalue);

   switch (operator) {
     case 1:
         result=oldvalue1+newvalue1;
         break;
         case 2:
         result=oldvalue1-newvalue1;
            break;
         case 3:
            result=oldvalue1/newvalue1;
            break;
        case 4:
                result=oldvalue1*newvalue1;
                break;
   
     default:
        result=0;
        break;
   }
   document.getElementById ("display").value=result
   newvalue=0;
   oldvalue=0;

   //pop alert when you press invalid button

   if (isNaN(result)) {
    clearscreen()
    soundwrong.play();
    window.alert("it not a number ! please try again ");
    
    
    
    }else{
        console.log("result="+result)
    } 
}



