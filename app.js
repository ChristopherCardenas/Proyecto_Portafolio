
document.addEventListener("DOMContentLoaded", function() {
    const darkModeSwitch = document.querySelector(".switch input");
    const body = document.body;

    darkModeSwitch.addEventListener("change", function() {
    if (darkModeSwitch.checked) {
        body.classList.add("dark-mode");  
    } else {
        body.classList.remove("dark-mode");  
    }
    });
});

