
// const btn = document.querySelector('button')
// 
const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML ="please enter a valid number"
    }else if (weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML ="please enter a valid number"
    }else{
       const  bmi=  (weight/ ((height*height)/10000)).toFixed(2)
       result.innerHTML= `your BMI is ${bmi}`
    }
    
});
