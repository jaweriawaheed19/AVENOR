// ==========================================
// CONTACT PAGE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    initContactForm();

    initFAQ();

});

// ==========================================
// CONTACT FORM
// ==========================================

function initContactForm(){

    const sendBtn = document.getElementById("sendMessageBtn");

    if(!sendBtn) return;

    sendBtn.addEventListener("click", function(){

        clearErrors();

        let valid = true;

        const name = document.getElementById("name");

        const email = document.getElementById("email");

        const subject = document.getElementById("subject");

        const message = document.getElementById("message");

        function validate(input,errorId,messageText){

            if(input.value.trim()===""){

                input.classList.add("input-error");

                document.getElementById(errorId).textContent = messageText;

                valid = false;

            }

        }

        validate(name,"nameError","Please enter your name.");

        validate(email,"emailError","Please enter your email.");

        validate(subject,"subjectError","Please enter a subject.");

        validate(message,"messageError","Please enter your message.");

        // Email Validation

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(email.value && !emailRegex.test(email.value)){

            email.classList.add("input-error");

            document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

            valid = false;

        }

        if(!valid) return;

        // Success Toast

        showContactToast();

        // Clear Form

        name.value = "";

        email.value = "";

        subject.value = "";

        message.value = "";

    });

}

// ==========================================
// CLEAR ERRORS
// ==========================================

function clearErrors(){

    document.querySelectorAll(".error-message").forEach(error=>{

        error.textContent = "";

    });

    document.querySelectorAll(".contact-card input, .contact-card textarea").forEach(input=>{

        input.classList.remove("input-error");

    });

}

// ==========================================
// SUCCESS TOAST
// ==========================================

function showContactToast(){

    const toast = document.getElementById("toast");

    if(!toast) return;

    document.getElementById("toastTitle").textContent =
    "Message Sent";

    document.getElementById("toastMessage").textContent =
    "Thank you for contacting AVENOR. We'll get back to you shortly.";

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

// ==========================================
// FAQ
// ==========================================

function initFAQ(){

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question=>{

        question.addEventListener("click",()=>{

            const item = question.parentElement;

            item.classList.toggle("active");

        });

    });

}