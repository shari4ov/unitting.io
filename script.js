const fixing = function(num) {
       return num.toFixed(3);
};

let valueInp = document.getElementById('numberInput');


const btnSubmit = document.querySelector('.btn-submit');

// Meter to feet
let meterOut = document.querySelector('.meterOut');
let feetOut = document.querySelector('.feetOut');
let meterIn = document.querySelector('.meterIn');
let feetIn = document.querySelector('.feetIn');


// Liter to Gallon

let literOut = document.querySelector('.literOut');
let glOut = document.querySelector('.glOut');
let literIn = document.querySelector('.literIn');
let glIn = document.querySelector('.glIn');





// Kilo to Pound reverse
let kiloOut = document.querySelector('.kiloOut');
let poundOut = document.querySelector('.poundOut');
let kiloIn = document.querySelector('.kiloIn');
let poundIn = document.querySelector('.poundIn');




btnSubmit.addEventListener('click',function(e){
       e.preventDefault();
       

       literOut.textContent =(valueInp.value);
       glIn.textContent = (valueInp.value);
       kiloOut.textContent = (valueInp.value);
       poundIn.textContent=(valueInp.value);
       meterOut.textContent = (valueInp.value);
       feetIn.textContent = (valueInp.value);


       feetOut.textContent = meterOut.textContent *  3.2808;
       meterIn.textContent = fixing(feetIn.textContent /  3.2808);
       glOut.textContent = literOut.textContent * 0.2641;
       literIn.textContent=fixing(glIn.textContent /  0.2641);
       poundOut.textContent = kiloOut.textContent * 2.2046;
       kiloIn.textContent = fixing(poundIn.textContent / 2.2046);
})