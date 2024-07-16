function talk(){
    var text=document.getElementById("text").value;
    var speack=new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speack);

}