const addBar = document.querySelector('.buttons');
const container = document.querySelector('.container')
const inputTask = document.querySelector('.input-text')

addBar.addEventListener('click',function(){
  
    let task = document.createElement('div');
    task.classList.add('task')
    let li = document.createElement('li')
    li.classList.add('list')
    li.innerText = `${inputTask.value}`;
    console.log(inputTask.vlaue)
    task.appendChild(li);

    let checkButton = document.createElement('button')
    checkButton.innerText= 'X'
    checkButton.classList.add('cbtn')
    task.appendChild(checkButton)

    if(inputTask.vlaue === ""){

        alert('please enter a task');

    }
    else{

        container.appendChild(task);
    }

    // inputTask.value=""

});