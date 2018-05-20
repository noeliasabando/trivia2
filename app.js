function play(){
    var name= document.getElementById("inputName").value;

    var divBienvenida= document.getElementById("Bienvenida");

    divBienvenida.innerHTML= name + " vamos a comenzar!";

    document.getElementById("Preguntas").style.visibility= "visible"
}

function dontPlay(){
    document.write("Lástima que no quieras jugar, será para la próxima <br>")

    document.write('<a href="index2.html"><button name= "boton3">Volver al inicio</button></a>')
}

function check() {
    var counter= 0
    var question1= document.Questions.Question1.value;
    var question2= document.Questions.Question2.value;
    var question3= document.Questions.Question3.value;
    var question4= document.Questions.Question4.value;
    var question5= document.Questions.Question5.value;

   
    if(question1== "2"){
        counter++;
     }

    if(question2=="2"){
        counter++;
    } 

    if(question3=="1"){
        counter++;
    }

    if(question4=="2"){
        counter++;
    }
    
    if(question5=="2"){
        counter++;
    }

   
    if (counter=== 5) {
        document.write("<p>¡Felicidades, haz respondido" + " " + counter + " " + "preguntas buenas.</p>")
    }

    if (counter===4) {
        document.write("<p>Muy bien, haz respondido" + " "+ counter + " "+ "preguntas buenas.<p>")
    }

    if (counter===3) {
        document.write("<p>Bien, haz respondido" + " " +counter + " "+ "preguntas buenas.<p>")
    }

    if (counter===2) {
        document.write("<p>No te desanimes, haz respondido" + " "+counter + " "+ "preguntas buenas.<p>")
    }

    if (counter===1) {
        document.write("<p>Vuelve a intentarlo, haz respondido" +" "+ counter + " "+"pregunta buena.<p>")
    }

    if (counter===0) {
        document.write("<p>Respondiste" + " " + counter +" " + "preguntas buenas, ánimo, siempre se puede volver a empezar.<p>")
    }

    document.write("<a href='index2.html'><button name= 'boton4'>Volver a comenzar</button></a>")

}

