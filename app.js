
var userInput = prompt(" Are you a bodybuilder? (yes/no)?");

if (userInput == "yes") {
    document.write('<h1>' + "welcome bodybuilder" + '</h1>');
    alert("welcome bodybuilder")
}
else if (userInput == "no") {
    document.write('<h1>' + "welcome Guest" + '</h1>');

    alert("welcome Guest")
} else { alert("welcome") };

var userInput = prompt(" Would you like to have an image in the background ?(yes/no)?");

if (userInput == "yes") { alert("welcome"); } else if (userInput == "no") {
    window.location.href = "index2.html";
    ; alert("welcome Guest")
} else { alert("welcome") };


