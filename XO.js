

const container = document.getElementById ("container");
const bloc1 = document.getElementById ("bloc1");
const bloc2 = document.getElementById ("bloc2");
const bloc3 = document.getElementById ("bloc3");
const bloc4 = document.getElementById ("bloc4");
const bloc5 = document.getElementById ("bloc5");
const bloc6 = document.getElementById ("bloc6");
const bloc7 = document.getElementById ("bloc7");
const bloc8 = document.getElementById ("bloc8");
const bloc9 = document.getElementById ("bloc9");

const bloc = document.querySelectorAll (".bloc");

const gameresult = document.getElementById ("gameresult");
const gameend = document.getElementById ("gameend");



const blocs = [
bloc1, bloc2, bloc3,
bloc4, bloc5, bloc6,
bloc7, bloc8, bloc9

];

/*
let Slt1 = bloc1.innerText;
let Slt2 = bloc2.innerText;
let Slt3 = bloc3.innerText;
let Slt4 = bloc4.innerText;
let Slt5 = bloc5.innerText;
let Slt6 = bloc6.innerText;
let Slt7 = bloc7.innerText;
let Slt8 = bloc8.innerText;
let Slt9 = bloc9.innerText;
*/




let Opt1;
let Opt2;
let Opt3;
let Opt4;
let Opt5;
let Opt6;
let Opt7;
let Opt8;
let Opt9;


/* Win and lose condition */

function XoWin () {
  if (Opt1== "X" && Opt2== "X" && Opt3 == "X" ||
     Opt4== "X" && Opt5== "X" && Opt6 == "X" || 
     Opt7== "X" && Opt8== "X" && Opt9 == "X" )
  {
    gameresult.innerHTML = "You've won !";
    gameend.innerHTML = " End game !"
return;
  };

if (Opt1== "X" && Opt4== "X" && Opt7 == "X" ||
     Opt2== "X" && Opt5== "X" && Opt8 == "X" || 
     Opt3== "X" && Opt6== "X" && Opt9 == "X" )
  {
        gameresult.innerHTML = "You've won !";
         gameend.innerHTML = " End game !"
return;

  };

  if (Opt1== "X" && Opt5== "X" && Opt9 == "X" ||
     Opt3== "X" && Opt5== "X" && Opt7 == "X" )
  {
        gameresult.innerHTML = "You've won !";
         gameend.innerHTML = " End game !"
return;

  };
  };

function XoLose () {
  
if (bloc1.innerHTML == "O" && bloc2.innerHTML == "O" && bloc3.innerHTML == "O" ||
     bloc4.innerHTML == "O" && bloc5.innerHTML == "O" && bloc6.innerHTML == "O" || 
     bloc7.innerHTML == "O" && bloc8.innerHTML == "O" && bloc9.innerHTML == "O" )
  {
     gameresult.innerHTML = "You lost !";
      gameend.innerHTML = " End game !"
return;
  };
  
  if (bloc1.innerHTML == "O" && bloc4.innerHTML == "O" && bloc7.innerHTML == "O" ||
     bloc2.innerHTML == "O" && bloc5.innerHTML == "O" && bloc8.innerHTML == "O" || 
     bloc3.innerHTML == "O" && bloc6.innerHTML == "O" && bloc9.innerHTML == "O" )
  {
    gameresult.innerHTML = "You lost !";
     gameend.innerHTML = " End game !"
return;
  };
  

  if (bloc1.innerHTML == "O" && bloc5.innerHTML == "O" && bloc9.innerHTML == "O" ||
     bloc3.innerHTML == "O" && bloc5.innerHTML == "O" && bloc7.innerHTML == "O" )
  {
    gameresult.innerHTML = "You lost !";
     gameend.innerHTML = " End game !"
return;
  };


  
};




/* Game mechanic */



bloc1.addEventListener ("click", () =>{
 if (bloc1.innerHTML !== "") return;
bloc1.innerHTML = "X";
Opt1 = bloc1.innerHTML;

console.log (Opt1);

XoWin();
playO();
XoLose();

});



bloc2.addEventListener ("click", () =>{

  if (bloc2.innerHTML !== "") return; 
bloc2.innerHTML = "X";
Opt2 = bloc2.innerHTML;

XoWin();
playO();
XoLose();


});


bloc3.addEventListener ("click", () =>{
   if (bloc3.innerHTML !== "") return; 
 
bloc3.innerHTML = "X";
Opt3 = bloc3.innerHTML;

console.log (Opt3);

XoWin();
playO();
XoLose();


});

bloc4.addEventListener ("click", () =>{
    if (bloc4.innerHTML !== "") return; 
bloc4.innerHTML = "X";
Opt4 = bloc4.innerHTML;
console.log (Opt4);

XoWin();
playO();
XoLose();

});

bloc5.addEventListener ("click", () =>{
    if (bloc5.innerHTML !== "") return; 

bloc5.innerHTML = "X";
Opt5 = bloc5.innerHTML;
console.log (Opt5);

XoWin();
playO();
XoLose();

});

bloc6.addEventListener ("click", () =>{
    if (bloc6.innerHTML !== "") return; 

bloc6.innerHTML = "X";
Opt6 = bloc6.innerHTML;
console.log (Opt6);

XoWin();
playO();
XoLose();

});


bloc7.addEventListener ("click", () =>{
    if (bloc7.innerHTML !== "") return; 

bloc7.innerHTML = "X";
Opt7 = bloc7.innerHTML;
console.log (Opt7);

XoWin();
playO();
XoLose();

});

bloc8.addEventListener ("click", () =>{

      if (bloc8.innerHTML !== "") return; 

bloc8.innerHTML = "X";
Opt8 = bloc8.innerHTML;
console.log (Opt8);

XoWin();
playO();
XoLose();

});


bloc9.addEventListener ("click", () =>{
      if (bloc9.innerHTML !== "") return; 

bloc9.innerHTML = "X";
Opt9 = bloc9.innerHTML;
console.log (Opt9);

XoWin();
playO();
XoLose();


});


function playO() {
  let empty = blocs.filter(b => b.innerHTML === "");

  if (empty.length === 0) return;

  let random = empty[Math.floor(Math.random() * empty.length)];
  random.innerHTML = "O";
  /*let random = Math.floor(Math.random() * empty.length)
  if (random == 1) {bloc1.innerHTML ="O";}*/

  console.log (random.innerHTML);
  
}



/*

container.addEventListener ("click", () =>{

let randomElement = blocs[Math.floor(Math.random() * blocs.length)];

if  (randomElement.innerHTML ==="") 
{
randomElement.innerHTML ="O"; };


console.log ( randomElement);



});*/ 



 

/*
bloc1.addEventListener ("click", () =>{
bloc1.innerHTML = "X";
let Opt1 = bloc1.innerHTML;

Blocclick ();

console.log (Opt1);
console.log (Opt2);

if (Opt1== "X") {

  console.log ("your win !")
}

});

function Blocclick () {bloc2.addEventListener ("click", () =>{

Opt2 = bloc2.innerHTML;
  bloc2.innerHTML = "X";



});}






let randomElement;

container.addEventListener ("click", () =>{


const randomElement = blocs[Math.floor(Math.random() * blocs.length)];

randomElement.innerHTML ="O";




});

console.log (randomElement); */



/* Il faut mettre un event listener sur
 le conteneur pour avoir les valuers de
  tous dans une grande fonction*/ 


/* Créer un objet avec toutes les Div*/

  /* essayer un if clic dans une div alors
  add innerHTML= "O" de façon random sur les DIv restantes
  
  */


  /* Ajouter reset ?*/

  /*function Win (xo) {
  
if (Opt1== xo && Opt2== xo && Opt3 == xo ||
     Opt4== xo && Opt5== xo && Opt6 == xo || 
     Opt7== xo && Opt8== xo && Opt9 == xo )
  {if(xo=="X"){ console.log("you win");}
  else if (xo=="O") {console.log("you lose")};}
  


  
};

Win("X")*/