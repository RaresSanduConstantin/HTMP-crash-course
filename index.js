'use strict';
let toggle = false;
const h1 = document.getElementById('headOne');
h1.style.cursor = 'pointer';
const der = [];
der.push(1);
console.log(der);

h1.onclick = function(e){
    // alert('click');
    // console.log();
    if(toggle){
        h1.innerHTML = "M-au aschimbat bulangii!"
        h1.style.color = '#32a87b';
        h1.style.border = '3px solid #3253a8';
        toggle = !toggle;
    }else{
        h1.innerHTML = "Am revenit"
        h1.style.color = '#000000';
        h1.style.border = 'none';
        toggle = !toggle
    }
    
    
  }
  h1.onmouseenter = function(e){
      console.log(e);
  }