


function alldata() {
    
let txt="";
  var startdate = document.getElementsByClassName('startDate');
    var enddate = document.getElementsByClassName('endDate');
    for(let i=0; i<startdate.length; i++){
      txt+= " Start: " +startdate[i].value +  " End: "+enddate[i].value + "<br>";
      
  }

 document.getElementById("details").innerHTML=txt;

}


function adddetails() {
        var y = document.createElement("INPUT");
        y.setAttribute("type", "datetime-local");
       
        y.className="startDate";
        var div = document.getElementById('form1');
        div.appendChild(y);

        var x = document.createElement("INPUT");
        x.setAttribute("type", "datetime-local");
       
        x.className="endDate";
        var div1 = document.getElementById('form1');
        div.appendChild(x);
        var element = document.getElementById('smt');
        element.addEventListener('click', alldata);
  
   }
   



function myFunction1(){
    var element1 = document.getElementById('add');
    element1.addEventListener('click', adddetails);
}   
    



document.addEventListener('DOMContentLoaded',myFunction1);
