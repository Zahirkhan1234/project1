const inputBox = document.querySelector('.inpt-box')
const buttons = document.querySelector('button')
const unl = document.querySelector('.list-wrap')

buttons.addEventListener('click',function(e){

    if(inputBox.value === ""){
        alert("please fill the box")
    }
    else{
    let li = document.createElement('li')
    li.innerText = inputBox.value
    inputBox.value = ''
    unl.appendChild(li)
    let span = document.createElement('span')
    span.classList.add('delete')
    span.innerText = '❌'
    li.appendChild(span)
    }

})

unl.addEventListener('click',function(e){
    

    if(e.target.tagName === "SPAN"){

        e.target.parentElement.remove()
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
    }
       

    
})