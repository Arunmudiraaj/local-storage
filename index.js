let username = document.querySelector('#name')
let useremail = document.querySelector('#email')
let submit = document.querySelector('#submit')

submit.addEventListener('click',submitted)

function submitted(){
    console.log(username.value,useremail.value)
    localStorage.setItem(username.value,useremail.value)
}