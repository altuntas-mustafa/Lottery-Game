let button = document.getElementById("myButton")    
let ball = document.querySelectorAll(".circle");
let adet = document.getElementById("adet");
ball = Array.from(ball);

button.addEventListener("click",() => {
    let liste = [[],[]];
    for (let i=0; i<adet.value;i++){
        for(let j=0; liste[i].length<8; j++){
            let sayi1 = randomNumber(1,99);
            if()
        }
    }
})








function randomNumber(min,max) {
    return Math.floor(Math.random() * max-min+1)+min;
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
