// ==========================================
// AVENOR ACCOUNT
// ==========================================

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const showRegister = document.getElementById("showRegister");
const registerCard = document.getElementById("registerCard");
const forgotPassword = document.getElementById("forgotPassword");

// ==========================================
// SHOW REGISTER FORM
// ==========================================

showRegister.addEventListener("click", () => {

    registerCard.classList.toggle("active");

    registerCard.scrollIntoView({

        behavior: "smooth",
        block: "start"

    });

});

// ==========================================
// EMAIL VALIDATION
// ==========================================

function validEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

// ==========================================
// CLEAR ERRORS
// ==========================================

function clearErrors(){

    document.querySelectorAll(".error-message").forEach(error=>{

        error.textContent="";

    });

    document.querySelectorAll("input").forEach(input=>{

        input.classList.remove("input-error");

    });

}

// ==========================================
// TOAST
// ==========================================

function showToast(title,message){

    const toast = document.getElementById("toast");

    document.getElementById("toastTitle").textContent = title;

    document.getElementById("toastMessage").textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

// ==========================================
// REGISTER
// ==========================================

registerBtn.addEventListener("click",()=>{

    clearErrors();

    let valid = true;

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("registerEmail");
    const password = document.getElementById("registerPassword");
    const confirm = document.getElementById("confirmPassword");

    function required(input,error,message){

        if(input.value.trim()===""){

            input.classList.add("input-error");

            document.getElementById(error).textContent = message;

            valid = false;

        }

    }

    required(firstName,"firstNameError","Required");
    required(lastName,"lastNameError","Required");
    required(email,"registerEmailError","Required");
    required(password,"registerPasswordError","Required");
    required(confirm,"confirmPasswordError","Required");

    if(email.value && !validEmail(email.value)){

        valid = false;

        email.classList.add("input-error");

        document.getElementById("registerEmailError").textContent =
        "Invalid email.";

    }

    if(password.value.length < 8){

        valid = false;

        password.classList.add("input-error");

        document.getElementById("registerPasswordError").textContent =
        "Minimum 8 characters.";

    }

    if(password.value !== confirm.value){

        valid = false;

        confirm.classList.add("input-error");

        document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match.";

    }

    if(!valid) return;

    const user = {

        firstName:firstName.value.trim(),

        lastName:lastName.value.trim(),

        email:email.value.trim(),

        password:password.value

    };

    localStorage.setItem(

        "avenorUser",

        JSON.stringify(user)

    );

    showToast(

        "Account Created",

        "Your account has been created successfully."

    );

    registerCard.classList.remove("active");

    firstName.value="";
    lastName.value="";
    email.value="";
    password.value="";
    confirm.value="";

});

// ==========================================
// LOGIN
// ==========================================

loginBtn.addEventListener("click",()=>{

    clearErrors();

    let valid = true;

    const email = document.getElementById("loginEmail");

    const password = document.getElementById("loginPassword");

    if(email.value.trim()===""){

        valid=false;

        email.classList.add("input-error");

        document.getElementById("loginEmailError").textContent="Required";

    }

    if(password.value.trim()===""){

        valid=false;

        password.classList.add("input-error");

        document.getElementById("loginPasswordError").textContent="Required";

    }

    if(!valid) return;

    const savedUser = JSON.parse(

        localStorage.getItem("avenorUser")

    );

    if(!savedUser){

        showToast(

            "No Account",

            "Please create an account first."

        );

        return;

    }

    if(

    email.value.trim() === savedUser.email &&

    password.value === savedUser.password

){

    // Save login session
    localStorage.setItem("avenorLoggedIn", "true");

    // Optional: save current user
    localStorage.setItem(
        "avenorCurrentUser",
        JSON.stringify(savedUser)
    );

    showToast(

        "Welcome Back",

        `Hello ${savedUser.firstName}! Redirecting...`

    );

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1500);

}

    else{

        password.classList.add("input-error");

        document.getElementById("loginPasswordError").textContent =

        "Incorrect email or password.";

    }

});

// ==========================================
// FORGOT PASSWORD
// ==========================================

forgotPassword.addEventListener("click",(e)=>{

    e.preventDefault();

    showToast(

        "Demo Version",

        "Password recovery is unavailable."

    );

});