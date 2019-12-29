'use strict';
let toggle = false;

const h1 = document.getElementById('headOne');
h1.style.cursor = 'pointer';
const der = [`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, 
vel minus aliquid amet, vitae sit eaaccusantium id voluptatem blanditiis a esse quae nobis d`, `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum`, `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vel minus aliquid amet, vitae sit ea
accusa ntium id voluptatem blanditiis a esse quae nobis delectus corporis expedita repudiandae. Enim,
dicta. Alias aspernatur enim doloribus veniam`];
der.push(1);
console.log(der);

h1.onclick = function (e) {
    // alert('click');
    // console.log(); 
    if (toggle) {
        console.log("Toggle este: ", toggle);
        h1.innerHTML = "M-au aschimbat bulangii!"
        h1.style.color = '#32a87b';
        h1.style.border = '3px solid #3253a8';
        toggle = !toggle;
    } else {
        console.log("Toggle este: ", toggle);
        h1.innerHTML = "Heading One"
        h1.style.color = '#000000';
        h1.style.border = 'none';
        toggle = !toggle
    }


}

h1.onmouseenter = function (e) {
    console.log(e);
}


