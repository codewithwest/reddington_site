var signinHeader = document.querySelector('.login-login')
var signupHeader = document.querySelector('.register-register')
var closeAuth = document.querySelector('.close-auth')

signinHeader.addEventListener('click', () => {
    signinHeader.style.background = "inherit"
    signupHeader.style.background = "rgba(119, 2, 2,.6)"
    document.querySelector('.register-form').style.display='none'
    document.querySelector('.login-form').style.display='flex'
})

signupHeader.addEventListener('click', () => {
    signupHeader.style.background = "inherit"
    signinHeader.style.background = "rgba(119, 2, 2,.6)"
    document.querySelector('.register-form').style.display='flex'
    document.querySelector('.login-form').style.display='none'
    
})

closeAuth.addEventListener('click', () => {
    document.querySelector('.login-register').style.display='none'
    
})


setTimeout(() => {
    document.querySelector('.login-register').style.display='flex'
}, 8000)
