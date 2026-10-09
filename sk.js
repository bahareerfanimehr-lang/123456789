
const bng =document.getElementById("btn");
const btn1 =document.getElementById("btn1");

 function tit(){
    const talkbox = new SpeechSynthesisUtterance("Bestie, thank you for always being there for me, no matter what. Happy Friendship Day to us! 💗🫂");
     talkbox.onend = function() {
    
         btn1.style.display="block"
};
     speechSynthesis.speak(talkbox)

 }
 bng.addEventListener("click",tit);
 
 
 

 const tbn= document.getElementById("btn1");
  const txt=document.getElementById("text");

 function write(){
    
     txt.style.display="block"
 }
 tbn.addEventListener("click", write);
