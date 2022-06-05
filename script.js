const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('input');
const infoText = document.querySelector('.info-text');
const right = document.querySelector('.right');
const resetBtn = document.querySelector('.reset');
const timeInfo = document.querySelector('.time-info')
let start= null;
let stop= null;
const randomNum = Math.floor(Math.random()* 101) + 1;

checkBtn.addEventListener('click',()=>{
    if(right.innerText == '10'){
        start = new Date().getTime();    
    }
    if(right.innerText == '0'){
        null
    }
    else{
        if (+guessInput.value == randomNum){
            infoText.innerText = '🎉WOOOW YOU GUESSED IT CORRECT🎉';
            stop = new Date().getTime();
            timeInfo.innerText= `you guessed it correctly in ${((stop-start)/1000).toFixed(2)} seconds`
        }
        else{
            if(right.innerText == 1){
                right.innerText -= 1;
                infoText.innerText = '🙅‍♀️ you have no right left 🙅‍♂️';
            }
            else{
                if (+guessInput.value < randomNum){
                    infoText.innerText = '🔺you better increase it🔺'
                    right.innerText -= 1;
                }
                else if (+guessInput.value > randomNum){
                    infoText.innerText = '🔻you better decrease it🔻'
                    right.innerText -= 1;
                }
            }
        }
    }   
})

