const Random = parseInt( Math.random()*100+1)
const form = document.querySelector('form')
const remguess = document.querySelector('remguess')

const submit = document.querySelector('.guessSubmit')
submit.addEventListener('submit',(e)=>{
    e.preventDefault()
    const guess = document.querySelector('.guessInput')
    const result = document.querySelector('.result')
    if(guess.value === Random){
        result.innerHTML = "you win!"
        
    }
    else{
        remguess
    }
    
})
console.log('hello')