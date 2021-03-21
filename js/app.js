const $sliders=document.querySelectorAll(".card");

// calcular el width del slider
let $container_width=document.querySelector(".container").clientWidth;
let contador=1;

document.addEventListener("click", (e) => {
  console.clear();
  console.log(e.target)
  e.preventDefault()
  if (e.target.matches(".btn__left") || e.target.matches(`${".btn__left"} *`) ) {
    console.log("PREV")
    contador--;
    if(contador<=0)contador=2;

    for(let i=0;i<$sliders.length;i++){
      $sliders[i].style.transform=`translate(${(-contador+1)*$container_width}px)`;
    }
  }
  if(e.target.matches(".btn__right") || e.target.matches(`${".btn__right"} *`) ){                
    console.log("NEXT")
    //reiniciar el contador   
    if(contador>$sliders.length-1) contador=0;
    
    for (let i=0;i<$sliders.length;i++) {                   
        $sliders[i].style.transform=`translate(${(-contador)*$container_width}px)`;    
    }
    contador++;
}        
});
