// step 1 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button click');

    // step 2 : get the email address inside the email input field 
    // always remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step 3-a: set id on the html element 
    // step 3-b: get the element 
    // step 3-c: get the value from the  element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    // Danger : do not verith email password on the client side 

    // step 4: verify email and password 
    if(email === 'sontan@baap.com' && password === 'secret'){
        // console.log('valid user');
        window.location.href = 'bank.html';
    }
    else{
        alart('toke ami teijjo sontan gosona korlam tui password vhule geshoch');
    }
})