window.addEventListener('mousemove', mouseCoordinates);
let x = 0
let y = 0


function mouseCoordinates(event){
    document.querySelector(".goatcontent").style.transform = `translate(${event.pageX/30}px, ${event.pageY/30}px)`;
    document.querySelector(".typewriter").style.transform = `translate(${(event.pageX)/30}px, ${(event.pageY)/30}px)`;
}
