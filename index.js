document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

function LoginButton() {
    var Username = document.getElementById("UsernameBox").value
    var Password = document.getElementById("PasswordBox").value
    if (Username == "MaggieSmith" && Password == "SEAPORT") {
        LoginSuccessSequence()
    }
    if (Username != "MaggieSmith" || Password != "SEAPORT") {
        LoginFailureSequence()
    }

}   


function LoginSuccessSequence() {

}

function LoginFailureSequence() {
    console.log("Failure")
    document.getElementById("LoginButtonID").style.top = "70%"
}