let checkbox = document.querySelector('.check')
let screenDiv = document.querySelector('.screen')
let keys = document.querySelector('.keys')
let keyButton = document.querySelectorAll('.key-button')
let equals = document.querySelector('.equals')
let expression = []

function firstTema(){
    checkbox.classList.remove('second')
    checkbox.classList.remove('third')
    checkbox.classList.add('first')
    ///
    document.body.classList.add('main-back')
    document.body.classList.remove('main-white')
    document.body.classList.remove('main-purple')
    //
    screenDiv.classList.add('dark-blue-screen')
    screenDiv.classList.remove('white-screen')
    screenDiv.classList.remove('purple-screen')
    //
    keys.classList.add('blue-keys')
    keys.classList.remove('gray-keys')
    keys.classList.remove('purple-keys')
    //
    equals.classList.add('light-red')
    equals.classList.remove('light-orange')
    equals.classList.remove('pure-cyan')
    //
    for(let i in keyButton){
        keyButton[i].classList.remove('key-yellow')
        keyButton[i].classList.remove('key-purple')
        if(keyButton[i].classList.contains('light-purple')){
            keyButton[i].classList.add('light-blue')
            keyButton[i].classList.remove('light-purple')
        }else if(keyButton[i].classList.contains('dark-cyan')){
            keyButton[i].classList.add('light-blue')
            keyButton[i].classList.remove('dark-cyan')
        }
    }
    
    

}

function secondTema(){
    checkbox.classList.remove('first')
    checkbox.classList.remove('third')
    checkbox.classList.add('second')
    ///
    document.body.classList.add('main-white')
    document.body.classList.remove('main-back')
    document.body.classList.remove('main-purple')
    //
    screenDiv.classList.add('white-screen')
    screenDiv.classList.remove('dark-blue-screen')
    screenDiv.classList.remove('purple-screen')
    //
    keys.classList.add('gray-keys')
    keys.classList.remove('blue-keys')
    keys.classList.remove('purple-keys')
    //
    equals.classList.add('light-orange')
    equals.classList.remove('light-red')
    equals.classList.remove('pure-cyan')
    //
    for(let i in keyButton){
        keyButton[i].classList.remove('key-purple')
        keyButton[i].classList.add('key-yellow')
        if(keyButton[i].classList.contains('light-blue')){
            keyButton[i].classList.remove('light-blue')
            keyButton[i].classList.add('dark-cyan')
        }else if(keyButton[i].classList.contains('light-purple')){
            keyButton[i].classList.remove('light-purple')
            keyButton[i].classList.add('dark-cyan')
        }
    }
    //
}

function thirdTema(){
    checkbox.classList.remove('first')
    checkbox.classList.remove('second')
    checkbox.classList.add('third')
    ///
    document.body.classList.add('main-purple')
    document.body.classList.remove('main-white')
    document.body.classList.remove('main-back')
    //
    screenDiv.classList.add('purple-screen')
    screenDiv.classList.remove('white-screen')
    screenDiv.classList.remove('dark-blue-screen')
    ///
    keys.classList.add('purple-keys')
    keys.classList.remove('gray-keys')
    keys.classList.remove('blue-keys')
    //
    equals.classList.add('pure-cyan')
    equals.classList.remove('light-orange')
    equals.classList.remove('light-red')
    //
    for(let i in keyButton){
        keyButton[i].classList.remove('key-yellow')
        keyButton[i].classList.add('key-purple')
        if(keyButton[i].classList.contains('light-blue')){
            keyButton[i].classList.remove('light-blue')
            keyButton[i].classList.add('light-purple')
        }else if(keyButton[i].classList.contains('dark-cyan')){
            keyButton[i].classList.add('light-purple')
            keyButton[i].classList.remove('dark-cyan')
        }
    }
}

screenDiv.innerHTML = ''


function setCalc(n){
    screenDiv.append(n)
    expression.push(n)
    
}

function result(){
    let n = screenDiv.innerHTML
    let total = eval(n)
    screenDiv.innerHTML = total
    
}

function reset(){
    screenDiv.innerHTML = ''
}

function del(){
    expression.pop()
    let totalDel = expression.join('')
    console.log(totalDel)
    screenDiv.innerHTML = totalDel
}

