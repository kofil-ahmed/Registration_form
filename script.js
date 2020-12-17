const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    validdata();
})
const isEmail = (emailVal)=>{
    let atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1)return false;
    let dot = emailVal.indexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot == emailVal.length - 1)return false;
    return true
}
function validdata(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = number.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal == ''){
        setErrorMsg(username,'Username can not blank')
    }
    else if(usernameVal.length <= 2){
        setErrorMsg(username,'username min 3 char')
    }
    else{
        setSuccessMsg(username)
    }

    if(emailVal == ''){
        setErrorMsg(email,'Username can not blank')
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email,'username min 3 char')
    }
    else{
        setSuccessMsg(email)
    }
}

function setErrorMsg(input,errorMsg){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = errorMsg;
}
function setSuccessMsg(input){
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}