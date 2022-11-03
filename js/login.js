const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    if (mainFunc()) {
        fetch('http://127.0.0.1:5500/', {
        method:'post', 
        headers: {'Authorization': 'Basic '},
        body: JSON.stringify({
            Email: email.value,
            Password: password.value,
          }),
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
        console.log("Logged In")
    } else [
        console.log("Cannot Log In")

    ]
})


function mainFunc(){
    const email= document.getElementById("email");
    const password= document.getElementById("password");
    email.classList.remove('error')
    password.classList.remove('error')
    if (EmailValidate(email.value) && passwordValidate(password.value)){
        
        console.log("form submitted")
        return true
    }
    else{
        if (!EmailValidate(email.value)) {
            email.classList.add('error')
        }
        if (!passwordValidate(password.value)) {
            password.classList.add('error')
        }
        console.log("plaese fill the details")
        return false
    }   
}
function EmailValidate(email){
    const regularExpression  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return email.match(regularExpression)   
}
function passwordValidate(password){
    const regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return password.match(regularExpression)   
}
