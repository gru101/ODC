const form = document.querySelector(".profile_update_form");
const new_email = document.querySelector("#new_email");
const new_number = document.querySelector("#new_number");
const email = document.querySelector("#Email");
const Contact_number = document.querySelector("#Contact_number");


document.addEventListener("DOMContentLoaded",(event)=>{   
    // const email_exist = document.querySelector("#email_exists").value;
    // const number_exist = document.querySelector("#number_exists").value;

    // const email_exist_message = document.querySelector("#email_exists_message");
    // const number_exists_message = document.querySelector("#number_exists_message");

    // if(email_exist == "True"){
    //     email_exist_message.classList.remove("hidden");
    // }
    // if(number_exist == "True"){
    //     number_exists_message.classList.remove("hidden");
    // }

        let email_check = false;
        let number_check = false;

        const email_message = document.createElement("p");
        email_message.textContent = "Entered email is same as current email. Enter different Email.";
        email_message.style.color = "red";
        email_message.classList.add("hidden");
        new_email.before(email_message)

        new_email.addEventListener("change",()=>{
            if(new_email.value.trim() == email.textContent.trim()){
                email_check = true
                email_message.classList.remove("hidden");
            }else if(new_email.value.trim() != email.textContent.trim()){
                email_message.classList.add("hidden");
                email_check = false
                console.log(has_error)
            }
        })

        const number_message = document.createElement("p");
        number_message.textContent = "Entered Contact Number is same as current Contact Number. Enter different Contact Number.";
        number_message.style.color = "red";
        number_message.classList.add("hidden");
        new_number.before(number_message);

        new_number.addEventListener("change",()=>{
            if(new_number.value.trim() == Contact_number.textContent.trim()){
                number_check = true
                number_message.classList.remove("hidden");
            }else if(new_number.value.trim() != Contact_number.textContent.trim()){
                number_message.classList.add("hidden");
                number_check = false
            }
        })


        form.addEventListener("submit", (event)=>{
            //Check if both updated number and updated email is empty or not 
            // if yes then it prevent the form from submitting.
            if(new_number.value.trim().length == 0 && new_email.value.trim().length == 0){
                event.preventDefault()
                console.log("submission prevented!")
            }
            // If the updated email or the updated number is same the current one then the submission of the form is prevented.
            else if(email_check != false || number_check !=false){
                event.preventDefault()
                console.log("submission prevented!")
            }else{
                form.submit()
            }
        })
})

// document.addEventListener("DOMContentLoaded",()=>{

// })


