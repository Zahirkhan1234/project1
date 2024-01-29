
const  button = document.querySelectorAll('.button');

const body=document.querySelector('body');
// console.log(body)

button.forEach((btn) =>{
    btn.addEventListener('click',(e) =>{

       body.style.backgroundColor = e.target.id;

    });
});