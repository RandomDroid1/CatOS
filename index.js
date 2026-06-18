var DesiredLetter = 'M';
var UsernameNumber = 0
var PDesiredLetter = 'S';
var PasswordNumber = 0

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

function LoginButton() {
    if(document.getElementById("UsernameBox").value == "MaggieSmithGB" && document.getElementById("PasswordBox").value == "SEAPORT") {
        window.location.href = "login.html"
    }
}   

document.getElementById("UsernameBox").addEventListener('input', (event) => {
    UsernameNumber += 1
    console.log(UsernameNumber)
    document.getElementById("UsernameBox").value = DesiredLetter
    if(UsernameNumber == 1) { // ts is inefficient?
        DesiredLetter += "a"
    }
    if(UsernameNumber == 2) {
        DesiredLetter += "g"
    }
    if(UsernameNumber == 3) {
        DesiredLetter += "g"
    }
    if(UsernameNumber == 4) {
        DesiredLetter += "i"
    }
    if(UsernameNumber == 5) {
        DesiredLetter += "e"
    }
    if(UsernameNumber == 6) {
        DesiredLetter += "S"
    }
    if(UsernameNumber == 7) {
        DesiredLetter += "m"
    }
    if(UsernameNumber == 8) {
        DesiredLetter += "i"
    }
    if(UsernameNumber == 9) {
        DesiredLetter += "t"
    }
    if(UsernameNumber == 10) {
        DesiredLetter += "h"
    }
    if(UsernameNumber == 11) {
        DesiredLetter += "G"
    }
    if(UsernameNumber == 12) {
        DesiredLetter += "B"
    }
});

document.getElementById("PasswordBox").addEventListener('input', (event) => {
    PasswordNumber += 1
    console.log(PasswordNumber)
    document.getElementById("PasswordBox").value = PDesiredLetter
    if(PasswordNumber == 1) {
        PDesiredLetter += "E"
    }
    if(PasswordNumber == 2) {
        PDesiredLetter += "A"
    }
    if(PasswordNumber == 3) {
        PDesiredLetter += "P"
    }
    if(PasswordNumber == 4) {
        PDesiredLetter += "O"
    }
    if(PasswordNumber == 5) {
        PDesiredLetter += "R"
    }
    if(PasswordNumber == 6) {
        PDesiredLetter += "T"
    }
});