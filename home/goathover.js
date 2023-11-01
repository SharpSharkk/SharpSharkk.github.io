window.addEventListener('mousemove', mouseCoordinates);


function mouseCoordinates(event){
    document.querySelector(".goatcontent").style.transform = `translate(${event.pageX/30}px, ${event.pageY/30}px)`;
    document.querySelector(".typewriter").style.transform = `translate(${(event.pageX)/30}px, ${(event.pageY)/30}px)`;
}
