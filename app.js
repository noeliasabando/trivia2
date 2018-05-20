function check() {
    var counter= 0
    var question1= document.preguntas.Question1.value;
    var question2= document.preguntas.Question2.value;
    var question3= document.preguntas.Question3.value;
    var question4= document.preguntas.Question4.value;
    var question5= document.preguntas.Question5.value;

   
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

}

