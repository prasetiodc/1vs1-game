var counterCom = 0
var counterPlayer = 0

function gameOn(){
    if(counterCom===0 && counterPlayer === 0){
        document.getElementById('statusCom').src = ''
        document.getElementById('statusPlayer').src = ''
        document.getElementById("tagCounterPlayer").innerHTML = "<h2>Score</h2>"
        document.getElementById("tagCounterCom").innerHTML = "<h2>Score</h2>"
    }

    if(document.getElementById("imagePlayer").src.match(/placeholder/gi)){
        console.log('masuk')
        alert('Invalid Player Option')
        return ''
    }

    console.log(document.getElementById("imagePlayer").src.match(/placeholder/gi))

    var player = {
        name : 'Prasetio',
        life : 3,
        choice : document.getElementById("imagePlayer").src
    }

    var computer = {
        name : 'computer',
        life :3,
        choice : loadComputer()
    }
    
    var players = [] 
    players = card(player,computer)
    
    setTimeout(function(){

        document.getElementById("counterCom").innerHTML = "<h2>"+counterCom+"</h2>"
        document.getElementById("counterPlayer").innerHTML = "<h2>"+counterPlayer+"</h2>"

        if(counterPlayer===3){
            document.getElementById('statusPlayer').src = 'img/winner.png'
            document.getElementById('statusCom').src = ''
    
            document.getElementById("tagCounterPlayer").innerHTML = ""
            document.getElementById("tagCounterCom").innerHTML = ""
            document.getElementById("counterCom").innerHTML = ""
            document.getElementById("counterPlayer").innerHTML = ""
            counterPlayer=0
            counterCom=0
        }else if(counterCom===3){
            document.getElementById('statusCom').src = 'img/winner.png'
            document.getElementById('statusPlayer').src = ''
    
            document.getElementById("tagCounterPlayer").innerHTML = ""
            document.getElementById("tagCounterCom").innerHTML = ""
            document.getElementById("counterCom").innerHTML = ""
            document.getElementById("counterPlayer").innerHTML = ""
            counterPlayer=0
            counterCom=0
        }
    
    },1500)

    if(players==='Player'){
        counterPlayer++
    }else if(players==='Computer'){
        counterCom++
    }

}

//Player choice card
function loadPlayer(){
    document.getElementById("imagePlayer").src = 'img/loading.gif'
    setTimeout(playerChoice,100)
}
function playerChoice(){
    var playerChoice = document.getElementById("selectChoice").value
    document.getElementById("imagePlayer").src = playerChoice
}


//Computer random choice card
function loadComputer(){
    document.getElementById("imageComputer").src = 'img/loading.gif'
    var gambar = ['img/human.png','img/elephant.png','img/ant.png','img/human.png','img/elephant.png','img/ant.png']
    
    var randomNum = Math.floor(Math.random() * gambar.length)

    setTimeout(function(){document.getElementById("imageComputer").src = gambar[randomNum]},1500)
    return gambar[randomNum]
}


//Condition Winning
function card(player, computer){
    var teks = 'DRAW'
    if(player.choice.match(/elephant/gi)){
        if(computer.choice.match(/human/gi)){
            teks = "Player"
        }else if(computer.choice.match(/ant/gi) && !computer.choice.match(/elephant/gi)){
            teks = "Computer"
        }
    }else if(player.choice.match(/human/gi)){
        if(computer.choice.match(/elephant/gi)){
            teks = "Computer"
        }else if(computer.choice.match(/ant/gi)){
            teks = "Player"
        } 
    }else if(player.choice.match(/ant/gi)){
        if(computer.choice.match(/elephant/gi)){
            teks = "Player"
        }else if(computer.choice.match(/human/gi)){
            teks = "Computer"
        }
    }
    return teks
}