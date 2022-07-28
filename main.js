
const submit = document.getElementById('submit-button');
const error = document.querySelector('#error-message');

submit.addEventListener('mousedown', function() {
    const userPassword = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    console.log(userPassword);
    console.log(confirmPassword);

    submit.style.boxShadow = "0px 0px";
    checkPasswordMatch(userPassword, confirmPassword);
});

submit.addEventListener('mouseup', function() {
    submit.style.boxShadow = "3px 5px 5px rgba(128, 128, 128, 0.228)";
});

function checkPasswordMatch(userPassword, confirmPassword) {
    if(confirmPassword !== userPassword) {        
        error.style.padding = '0px 0px';
        error.textContent = "* Passwords do not match"
        const inputBorder = Array.from(document.querySelectorAll('.required-list input'));
        console.log(inputBorder);
        for(let i = 0; i < inputBorder.length; i++) {
            inputBorder[i].style.border = '1px solid rgb(238, 0, 0';
        }
    }
};