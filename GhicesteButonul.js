let counter = 0, counterWin = 0, counterLose = 0, counterOfAttempts = 0;
let percentWin = 0, percentLose = 0;
let executionMessage = 0, executionMessage1 = 0, executionMessage2 = 0;

function afisareMesaj() {
   if(counter == 0) {
      let message = mesaj();
   document.getElementById("mesaj").innerHTML = message;
   if(message  == 'Ai castigat') {
      document.getElementById("mesaj").style.background = "grey";
      ++counterWin;
   }else if(message == 'Mai incearca') { 
       document.getElementById("mesaj").style.background = "yellow";
         ++counterLose;
   }
   ++counter;
   ++counterOfAttempts;
   executionMessage = 1;
   progressBar();
   } else {
      alert("Apasa pe butonul Ghiceste din nou");
   }
   return false;
}

function afisareMesaj1() {
   if(counter == 0) {
      let message = mesaj();
   document.getElementById("mesaj1").innerHTML = message;
   if(message  == 'Ai castigat') {
      document.getElementById("mesaj1").style.background = "grey";
      ++counterWin;
   }else if(message == 'Mai incearca') {
      ++counterLose;
      document.getElementById("mesaj1").style.background = "yellow";
   }
      ++counter;
      ++counterOfAttempts;
      executionMessage1 = 1;
      progressBar();
   } else {
      alert("Apasa pe butonul Ghiceste din nou");
   }
   return false;
}

function afisareMesaj2() {
   if(counter == 0) {
      let message = mesaj();
   document.getElementById("mesaj2").innerHTML = message;
   if( message == 'Ai castigat') {
      document.getElementById("mesaj2").style.background = "grey";
         ++counterWin;
   }else if(message == 'Mai incearca') {
         document.getElementById("mesaj2").style.background = "yellow";
         ++counterLose;
   }
         ++counter;
         ++counterOfAttempts;
         executionMessage2 = 1;
         progressBar();
   } else {
      alert("apasa pe butonul Ghiceste din nou");
   }
   return false;
}

function mesaj() {
   let message = ["Mai incearca", "Ai castigat"];
   let index = message[Math.floor(Math.random() * message.length)];
   return index;
}

function refreshPage() {
   if(executionMessage == 0 && executionMessage1 == 0 && executionMessage2 == 0 && percentLose == 0 && percentWin == 0) {
      alert("Apasa pe unul dintre butoanele verzi!")
         document.getElementById("progress-win").style.width = "0%";
         document.getElementById("progress-win").innerHTML = "0%";
         document.getElementById("progress-lose").style.width = "0%";
         document.getElementById("progress-lose").innerHTML = "0%";
   } else if (executionMessage == 0 && executionMessage1 == 0 && executionMessage2 == 0 ) {
      alert("Apasa pe unul dintre butoanele verzi!");
   } else {
      executionMessage = 0;
      executionMessage1 = 0;
      executionMessage2 = 0;
   }
   let word = document.getElementById("mesaj");
   let word1 = document.getElementById("mesaj1");
   let word2 = document.getElementById("mesaj2");
   if(word != "Incearca") {
      document.getElementById("mesaj").innerHTML = "Incearca";
      document.getElementById("mesaj").style.background = "rgb(0, 255, 0)";
   }
   if(word1 != "Incearca") {
      document.getElementById("mesaj1").innerHTML = "Incearca";
      document.getElementById("mesaj1").style.background = "rgb(0, 255, 0)";
   }
   if(word2 != "Incearca") {
      document.getElementById("mesaj2").innerHTML = "Incearca";
      document.getElementById("mesaj2").style.background = "rgb(0, 255, 0)";
   }
   counter = 0;
   return false;
}

function progressBar() {
   percentWin = (counterWin / counterOfAttempts) * 100;
   percentLose = (counterLose / counterOfAttempts) * 100;
   document.getElementById("progress-win").style.width = percentWin + "%";
   document.getElementById("progress-win").innerHTML = percentWin + "%";
   document.getElementById("progress-lose").style.width = percentLose + "%";
   document.getElementById("progress-lose").innerHTML = percentLose + "%";
}

function refreshProcentBar() {
   if(percentWin != 0 || percentLose != 0) {
      percentLose = 0, percentWin = 0, counterLose = 0, counterWin = 0, counterOfAttempts = 0;
      document.getElementById("progress-win").style.width = percentWin + "%";
      document.getElementById("progress-win").innerHTML = percentWin + "%";
      document.getElementById("progress-lose").style.width = percentLose + "%";
      document.getElementById("progress-lose").innerHTML = percentLose + "%";
   }
   return false;
}
