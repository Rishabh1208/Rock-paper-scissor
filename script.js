
    //challange 1
    let button = document.getElementsByTagName('button');
    let copy = [];
    for (i=0; i<button.length; i++){
        copy.push(button[i].classList[1])
    }
    console.log(copy);
    function colorChange(color){
        if (color.value==="red"){
            redColor()
        } else if (color.value==="green"){
            greenColor()
            } else if (color.value==="yellow"){
                yellowColor()
            } else if(color.value==="reset"){
                resetColor()
            } else {
                randomColor()
            }
    }
    function redColor(){
        for(let i=0; i<button.length; i++){
            button[i].classList.remove(button[i].classList[1])
            button[i].classList.add('btn-danger')
        }
    }

    function greenColor(){
        for(let i=0; i<button.length; i++){
            button[i].classList.remove(button[i].classList[1])
            button[i].classList.add('btn-success')
        }
    }

    function yellowColor(){
        for(let i=0; i<button.length; i++){
            button[i].classList.remove(button[i].classList[1])
            button[i].classList.add('btn-warning')
        }
    }
    function resetColor(){
        for(let i=0; i<button.length; i++){
            button[i].classList.remove(button[i].classList[1])
            button[i].classList.add(copy[i])
        }
    }
    function randomColor(){
        var choices =['btn-primary','btn-success','btn-warning','btn-danger'];
        
        for(let i=0; i<button.length; i++){
            var random = Math.floor(Math.random()* 4);
            button[i].classList.remove(button[i].classList[1])
            button[i].classList.add(choices[random])
        }

    }

    //challange 2: Rock, paper, scissor

    function rpsGame(yourChoice){
        console.log(yourChoice.id)
        var humanChoice, botChoice;
        humanChoice = yourChoice.id;

        botChoice = numberToChoice(randToInt());
        console.log(botChoice)

        results= decideWinner(humanChoice,botChoice);
        console.log(results);

        message= finalMessage(results);
        console.log(message);
        //{'message':'you won','color':'green'}
       rpsFrontEnd(yourChoice.id,botChoice,message);
    }

    function randToInt(){
        return Math.floor(Math.random()*3);
    }

    function numberToChoice(number){
        return ['rock','paper','scissor'][number];
    }

    function decideWinner(yourChoice,computerChoice){
        var rpsDatabasse= {
            'rock':{'scissor':1,'rock':0.5,'paper':0},
            'paper':{'rock':1,'paper':0.5,'scissor':0},
            'scissor':{'rock':0,'paper':1,'scissor':0.5}

        };
        var yourScore= rpsDatabasse[yourChoice][computerChoice];
        var computerScore= rpsDatabasse[computerChoice][yourChoice];

        return[yourScore,computerScore];
    }

    function finalMessage([yourScore,computerScore]){
        if (yourScore===0){
            return {'message':'You Lost!','color':'red'}
        } else if (yourScore===0.5){
            return {'message':'You tied!','color':'yellow'}

        } else {
            return {'message':'You won!','color':'green'}
        }
    }

    function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
        var ImageDatabase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissor': document.getElementById('scissor').src
        }
        // remove all the images
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();

        var humandiv= document.createElement('div');
        var botdiv= document.createElement('div');
        var messagediv= document.createElement('div');

        humandiv.innerHTML= "<img src='"+ ImageDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow: 2px 8px 50px rgba(37,50,233,1);'>"
        botdiv.innerHTML= "<img src='"+ ImageDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow: 2px 8px 50px rgba(243,38,24,1);'>"
        messagediv.innerHTML= "<h1 style='color: "+ finalMessage['color']+"; font-soxe:60px; padding:30px;'>"+finalMessage['message']+"</h1>"

        document.getElementById('flex-box-rpsid').appendChild(humandiv);
        document.getElementById('flex-box-rpsid').appendChild(messagediv);
        document.getElementById('flex-box-rpsid').appendChild(botdiv);
        

    }


    

