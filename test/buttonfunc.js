const buttons = document.querySelector(".box-group")
const boxes = [buttons.children[0]]


for (let i=1; i < buttons.children.length; i++) {
    boxes.unshift(buttons.children[i])
}

let curr=0;


function moveright() {
    if (curr==boxes.length) {curr=0}
    let l1 = curr==boxes.length-1 ? 0 : curr+1;
    let r1 = curr==0 ? boxes.length-1 : curr-1;
    let l2 = curr==boxes.length-1?1 : curr==boxes.length-2?0 : curr+2
    let r2 = curr==0?boxes.length-2 : curr==1?boxes.length-1 : curr-2

    buttons.children[l2].classList.remove("InvisibleL")
    buttons.children[l2].classList.add("Left")

    buttons.children[l1].classList.remove("Left")
    buttons.children[l1].classList.add("Front")

    buttons.children[curr].classList.remove("Front")
    buttons.children[curr].classList.add("Right")

    buttons.children[r1].classList.remove("Right")
    buttons.children[r1].classList.add("InvisibleR")

    buttons.children[r2].classList.remove("InvisibleR")
    buttons.children[r2].classList.add("InvisibleL")

    curr = curr+1==boxes.length ? 0 : curr+1
}


function moveleft() {
    let l1 = curr==boxes.length-1 ? 0 : curr+1;
    let r1 = curr==0 ? boxes.length-1 : curr-1;
    let l2 = curr==boxes.length-1?1 : curr==boxes.length-2?0 : curr+2
    let r2 = curr==0?boxes.length-2 : curr==1?boxes.length-1 : curr-2
    
    console.log(curr)
    
    buttons.children[l2].classList.remove("InvisibleL")
    buttons.children[l2].classList.add("InvisibleR")

    buttons.children[l1].classList.remove("Left")
    buttons.children[l1].classList.add("InvisibleL")

    buttons.children[curr].classList.remove("Front")
    buttons.children[curr].classList.add("Left")

    buttons.children[r1].classList.remove("Right")
    buttons.children[r1].classList.add("Front")

    buttons.children[r2].classList.remove("InvisibleR")
    buttons.children[r2].classList.add("Right")

    curr = curr==0 ? boxes.length-1 : curr-1;
}