alert("hello");
function zmien(id){
   
    if(id.innerHTML=='You Clicked'){
        id.innerHTML='Click Me!';
    document.getElementById("test").innerHTML='Tutaj bedzie tekst';
    }
    else
    {
    id.innerHTML='You Clicked'; 
    document.getElementById("test").innerHTML='super';
    }
    
}


function data(){
    document.getElementById("test").innerHTML = Date();
}

function wyzeruj(){
    
    if(document.getElementById("button").innerHTML=='You Clicked'){
    document.getElementById("test").innerHTML='super';
    }
    else if(document.getElementById("button").innerHTML=='Click Me!')
    {
    document.getElementById("test").innerHTML='Tutaj bedzie tekst';
    }
}

var number1 = '35';
var number2 = '40';


alert('My number is' + number1 + number2);

var colors = ['red', 'blue', 'green'];
var colors2 = new Array(5);
for(i=0; i<colors2.length; i++) {
    colors2[i]='red';
}
var numbers =[1,2,3,4,5,6,7,8,9];

document.write(numbers);
document.write(colors);


     
function losuj()
{
    losowe.textContent=" ";
    for(var i=0;i<6;i++){
    losowe.textContent=losowe.textContent+" "+(Math.floor(Math.random()*(49))+1);
        }
}
 