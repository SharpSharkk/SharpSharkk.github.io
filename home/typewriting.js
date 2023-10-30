const start = Date.now()
const words = ["Shahzaib", "A Programmer", "A Web Dev", "A Highschooler"];
const element = document.getElementById("phrase");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let i=0;
const writeloop1 = async () => {
    while (true) {
        let word = words[i];

        for (let j=0; j<word.length; j++) {
            element.innerText = word.substring(0, j+1);
            await sleep(250);
        }
        
        await sleep(2500)

        for (let j=(word.length); j>0; j--) {
            element.innerText = word.substring(0, j-1);
            await sleep(125);
        }
    
        await sleep(2000);

        if (i===words.length-1){
            i=0;
        }
        else{
            i++;
        }
    }
}

writeloop1();