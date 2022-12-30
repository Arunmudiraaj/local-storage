let username = document.querySelector('#name')
let useremail = document.querySelector('#email')
let submit = document.querySelector('#submit')

submit.addEventListener('click',submitted)

function submitted(){
    var obj = {
        name : username.value,
        email : useremail.value,
    }
    var strFormat = JSON.stringify(obj)
    localStorage.setItem(useremail.value,strFormat)
    console.log(JSON.parse(localStorage.getItem('user')))
}