const submitBtn = document.getElementById('submit1')

submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    if (mainFunc()) {
        fetch('https://stark-harbor-18596.herokuapp.com/register', {
        method:'post', 
        mode:'no-cors',
        headers: {
        'Authorization': 'Basic ',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            Email: email.value,
            Password: password.value,
            Confpassword: confpassword.value,
          })
        })
        // .then(response => response.json())
        .then(resp => resp.text()).then(console.log)
        // .then(response => console.log(response))
        .then(json => console.log(json))
        .catch(error => console.log('Request Failed',error));
        console.log("Registered In")
    }
    else [
        console.log("Cannot Registered In")

    ]
})


function mainFunc(){
    const email= document.getElementById("email");
    const password= document.getElementById("password");
    const confpassword= document.getElementById("confpassword");
    confpassword.classList.remove('error')
    email.classList.remove('error')
    password.classList.remove('error')
    if (EmailValidate(email.value) && passwordValidate(password.value) && confpasswordValidate(password.value,confpassword.value)){
        console.log("form submitted")
        return true
    }
    
    else{
        // if (!EmailValidate(email.value) || !passwordValidate(password.value) || !confpasswordValidate(password.value,confpassword.value)) {
        //     email.classList.add('error');
        //     password.classList.add('error');
        //     confpassword.classList.add('error');

        //     console.log("please fill the details")
        //     return false ;
        // }
        
        if (!EmailValidate(email.value)) {
            email.classList.add('error');
            email.focus();
            console.log("Invalid Email")
            return;
        }
        if (!passwordValidate(password.value)) {
            password.classList.add('error')
            password.focus();
            console.log("Invalid Password")
            return;
        }
        if (!confpasswordValidate(password.value,confpassword.value)) {
            confpassword.classList.add('error')
            password.classList.add('error')
            confpassword.focus();
            console.log('password doesnot match')
           
        }
        // console.log("plaese fill the details")
        // return false
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

function confpasswordValidate(password,confpassword){
    if(password != confpassword) return false;
    return true
}