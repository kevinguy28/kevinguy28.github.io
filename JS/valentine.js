let index = 0;
let cindex = 0;
const text = [
    "I kind of thought it was a given ...",
    "But the internet was telling me I still have to ask??",
    "First relationship ever - Sorry didn't know ... ",
    "Laurakins ... Will you be my Valentines?",
    "Hmmm ... Too easy ... Can you try saying no ... ",
];

const text2 =[
    "Saying No, messed up don't you think? Try again :3",
    "!?!?!?!?!?!?!!?!?!?!"
];

const cat = [
    "gif/cat3.gif",
    "gif/cat4.gif",
    "gif/cat5.gif",
    "gif/cat6.gif"
]

function myFunction(){
    document.getElementById("text").innerHTML = text[index];

    if(index == 1){
        document.getElementById("gif").src = cat[cindex];
        cindex+=1;
    };

    if(index == 3){
        document.getElementById("gif").src = cat[cindex];
        cindex+=1;
    }

    index+=1;

    if(index ==4){
        document.getElementById("button").style.display = "none";
        document.getElementById("yes").style.display = "initial";
        document.getElementById("no").style.display = "initial";
    }
}

function game1(){
    document.getElementById("text").innerHTML = text[index];
    document.getElementById("yes").style.display = "none";
    index = 0;
}

function game2(){
    index = 0;
    document.getElementById("text").innerHTML = text2[index];
    document.getElementById("no").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("yes2").style.display = "initial";
    document.getElementById("no2").style.display = "initial";
}

function game3(){
    document.getElementById("text").innerHTML ="YIPPPPPPPIEEEE!!! <333"
    document.getElementById("gif").src = cat[2];
    document.getElementById("yes2").style.display = "none";
    document.getElementById("no2").style.display = "none";
    document.getElementById("no3").style.display = "none";
    document.getElementById("firework").style.display = "initial";
}

function game4(){
    document.getElementById("gif").src = cat[3];
    document.getElementById("text").innerHTML = text2[1];
    document.getElementById("no2").style.display = "none";
    document.getElementById("no3").style.display = "initial";
}

function game5(){

    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    document.getElementById("no3").style.left = i+"px";
    document.getElementById("no3").style.top = j+"px";
    console.log("ss")
    console.log(i+"px", j+"px")
}