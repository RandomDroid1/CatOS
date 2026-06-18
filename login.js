var TextUpdateNumber = 0
var TextValue = "<p>Logging into CatOS"
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    setTimeout(TextUpdate ,500);
    
});

function TextUpdate() {
    if(TextUpdateNumber == 0) {
        TextValue += "<br> Loading: CatOS Ver 8.2"
        setTimeout(TextUpdate, 1000);
    }
    if(TextUpdateNumber == 1) {
        TextValue += "<br> <span class='LightBlue'>Fish Beta</span> Confirmed"
        setTimeout(TextUpdate, 1000);
    }
    if(TextUpdateNumber == 2) {
        TextValue += "<br> CPU <span class='Green'> [OK] </span>"
        setTimeout(TextUpdate, 500);
    }
    if(TextUpdateNumber == 3) {
        TextValue += "<br> GPU <span class='Green'> [OK] </span>"
        setTimeout(TextUpdate, 700);
    }
    if(TextUpdateNumber == 4) {
        TextValue += "<br> MEMORY <span class='Green'> [OK] </span>"
        setTimeout(TextUpdate, 200);
    }
    if(TextUpdateNumber == 5) {
        TextValue += "<br> STORAGE <span class='Green'> [OK] </span>"
        setTimeout(TextUpdate, 100);
    }
    if(TextUpdateNumber == 6) {
        TextValue += "<br> PSU <span class='Green'> [OK] </span>"
        setTimeout(TextUpdate, 100);
    }
    if(TextUpdateNumber == 7) {
        TextValue += "<br> User <strong> MaggieSmithGB</strong> confirmed"
        setTimeout(TextUpdate, 100);
    }
    if(TextUpdateNumber == 8) {
        TextValue += "<br> Server response recieved"
        setTimeout(TextUpdate, 800);
    }
    if(TextUpdateNumber == 9) {
        TextValue += "<br> <h3> Welcome to CatOS, the world's premier operating system <h3>"
        setTimeout(TextUpdate, 1000);
    }
    if(TextUpdateNumber == 10) {
        window.location.href = "landing.html"
    }
    TextUpdateNumber += 1
    document.getElementById("MainText").innerHTML = TextValue
    console.log(TextUpdateNumber)
}