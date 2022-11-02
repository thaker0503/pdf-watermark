function mainFunc(){
    if (EmailValidate()){
        if (passwordValidate()){
            alert ("form submitted")
        }
    }
    else{
        return ("plaese fill the details")
    }

}

function userDetails(){
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;

   
}
function EmailValidate(){
    const email= document.getElementById("email").value;
    const regularExpression  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email.match(regularExpression)){
        alert("Valid Email")
        return true
    }     
    alert("Invalid Email")
    email.focus();
    return false   
}
function passwordValidate(){
    const password= document.getElementById("password").value;
    
    const regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.match(regularExpression)){
        alert("Valid Password")
        
        return true
    }                
    alert("Invalid Password");
    password.focus();
    return false   
}