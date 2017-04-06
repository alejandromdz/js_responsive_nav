const login=document.getElementById('login');
const form=document.getElementById('form');
const signup=document.getElementById('signup');
login.onclick=function(){
    form.classList.toggle('active')
    signup.classList.toggle('faded')
}