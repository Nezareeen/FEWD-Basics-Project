function goToSignup() {
    window.location.assign("signup.html");
}

function goToLogin() {
    window.location.assign("login.html");
}

    document.addEventListener("DOMContentLoaded", function () {
        const loginPage = document.querySelector(".login-container form");
        if(loginPage){
            loginPage.addEventListener("submit", function(event){
                const email = document.querySelector("#email").value.trim();
                const password = document.querySelector("#password").value.trim();
                const userName = document.querySelector("#name").value.trim();

                if(email=== "" || password === "" || userName === ""){
                    alert("Please fill all fields");
                    event.preventDefault();
                } else{
                    alert("Logged in successfully");
                    event.preventDefault();
                }
            });
        }


        const signUp = document.querySelector(".signup-box");
        if(signUp){
            signUp.addEventListener("submit", function(event){
                const email = document.querySelector("#emails").value.trim();
                const password = document.querySelector("#passwords").value.trim();
                if(email === "" || password === ""){
                    alert("Please fill all  fields");
                    event.preventDefault();
                } else{
                    alert("Signed in successfully");
                    event.preventDefault();
                }
            });
        }

        const socialIcons = document.querySelectorAll(".img-box img");
    socialIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            alert("You successfully logged in");
        });
    });

    });
