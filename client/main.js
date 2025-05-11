const form = document.getElementById("form");
const input_name = document.getElementById("input_name");
const input_email = document.getElementById("input_email");
const input_password = document.getElementById("input_password");
const submit = document.getElementById("Submit");


form.addEventListener("Submit", (e) =>{
    e.preventDefault();


    const name = input_name.value.trim();
    const email = input_email.value.trim();
    const password = input_password.value.trim();

    if(input_name === "") {
        displayError("Name is Required!");
        return;
    }

    if(input_email === ""){
        displayError("Email is Requied!");
        return;

    }

    if(input_password === ""){
        displayError("Password is Requied!");
        return;

    }


    if(!validateEmail(input_email)){
        displayError("Invalid Email address!");
        return;
    }

    if(!validatePassword(input_password)){
        displayError("Invalid Passwor");
        return;

    }

    console.log('Form data: ', {name, email, password});

    });




