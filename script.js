document.addEventListener("DOMContentLoaded", function () {
        const passwordInput = document.getElementById("passwordInput");
        const showIcon = document.getElementById("showIcon");
        const hideIcon = document.getElementById("hideIcon");

        function togglePassword(){
        if(passwordInput.type === "password"){
            passwordInput.type = "text";
            showIcon.style.display = "inline-block";
            hideIcon.style.display = "none";
        } else{
            passwordInput.type = "password";
            showIcon.style.display = "none";
            hideIcon.style.display = "inline-block";
        }
    }

    showIcon.addEventListener("click", togglePassword);
    hideIcon.addEventListener("click", togglePassword);
});