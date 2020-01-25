var strelicaLevo= document.getElementById('levo');
var strelicaDesno= document.getElementById('desno');
var slika=document.getElementById('slika');
var nizSlika=['slike/1.jpg','slike/2.jpg','slike/3.jfif','slike/4.jfif','slike/5.jpg'];
var i=0; //brojac je i 

console.log(strelicaLevo);
console.log(strelicaDesno);


function prethodna(){
//console.log('prethodna');
i=(i>0)? i-1 : nizSlika.length-1;
//ili
//i--;
//if(i<0)i=nizSlika.length-1;
slika.src=nizSlika[i];

}
function naredna(){
   // console.log(nizSlika[i]);
   if(i<nizSlika.length-1){
      i++; 
   }
   else{
       i=0;
   }
   //i=(i<nizSlika-1)? i+1:0;
   // a moze i ovako jer nema potrebe za else koji je ustvari :
   // i++;
   //if(i>nizSlika.length-1)i=0;
    
    slika.src=nizSlika[i];

}

strelicaLevo.addEventListener('click', prethodna );
strelicaDesno.addEventListener('click',naredna);
setInterval(naredna, 3000);