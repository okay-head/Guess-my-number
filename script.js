"use strict";

let x = Math.round(Math.random()*20);

//fire the function when a) user clicks on check  b) Presses enter
document.querySelector('.button .btn').addEventListener("click",getValue);
window.onkeydown = function (e) {
   if(e.key=='Enter'){
      getValue();
   }
}
let hint = document.querySelector('.right .hint');

let input = document.querySelector('.left input[type="number"]');

let score_element  = document.getElementById('score');
let score = document.getElementById('score').innerHTML;

let question = document.getElementById('question');

function getValue(){
   let z =document.getElementById('input').value;
   if (score>1) {
      
      if (z==x) {
         hint.innerHTML = 'Correct!';
         question.innerHTML = x;
         document.body.style.background = "green";
         input.style.background = "green";
      }
      else{
         score--;
         score_element.innerHTML = score;

         hint.innerHTML = z<x?'Too low':'Too high';
      }

      // REFACTORING IMP 

      //else if (z<x){
      //    // console.log('Too low');
      //    score--;
      //    score_element.innerHTML = score;
   
      //    hint.innerHTML = 'Too low';
         
      // }
      // else if(z>x){
      //    // console.log('Too high');
      //    score--;
      //    score_element.innerHTML = score;
      //    hint.innerHTML = 'Too high';
      // }
   }

   else{
      score--;
      score_element.innerHTML = score;
     hint.innerHTML = "Guess who's the loser";
     document.body.style.background = "red";
     input.style.background = "red";
   }
}

let again = document.querySelector('.flex .btn');

again.addEventListener('click',function () {
   window.location.reload();
});





