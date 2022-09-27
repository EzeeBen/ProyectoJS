//Declaración de variables
let r = 0;
let R = 0;
function ataque() {
    vidas--;
}
//Inicio del juego

alert("Bienvenidos a la prisión de Guiza");
alert("Solo hay una ruta de escape..");
alert("Derrotar a la esfinge en su juego de preguntas y respuestas!");
alert("Si llegas al final del juego con vida, podras escapar")
alert("Comencemos:");

do {
    let vidas = 2;
    let cuestionario = prompt("Elegí la categoría de tus preguntas! \n1- Geografía \n2- Deportes \n3- Historia \n4- Peliculas y Series");
    switch (cuestionario) {
        case "1":
            alert("Primera pregunta: Cual es la capital de Italia? \n1- Venecia \n2- Roma\n3- Florencia \n4- Napoles");
            let r1 = prompt("Tu respuesta es:");
            switch (r1) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible!");

            }

            alert("Segunda pregunta: Cual es el punto mas profundo del Oceano? \n1- Abismo Challenger \n2- Abismo Brownson\n3- Abismo Factorian \n4- Abismo Molloy");
            let r2 = prompt("Tu respuesta es:");
            switch (r2) {
                case "1":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Tercera pregunta: Cual es el país mas pequeño del mundo? \n1- San Marino \n2- Chipre\n3- El Salvador \n4- Ciudad del Vaticano");
            let r3 = prompt("Tu respuesta es:");
            switch (r3) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Cuarta pregunta: Cual es el pais mas grande del mundo? \n1- Brasil \n2- Rusia\n3- China \n4- Australia");
            let r4 = prompt("Tu respuesta es:");
            switch (r4) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Quinta pregunta: Cual es la ciudad mas poblada del mundo? \n1- Nueva York \n2- Hong Kong\n3- Tokio \n4- Bombay");
            let r5 = prompt("Tu respuesta es:");
            switch (r5) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }
            break;

        case "2":
            alert("Primera pregunta: Cuantos mundiales ganó Argentina? \n1- Uno \n2- Dos\n3- Tres \n4- Cero");
            let r6 = prompt("Tu respuesta es:");
            switch (r6) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Segunda pregunta: Cuantos balones de Oro tiene Messi? \n1- Siete \n2- Cinco\n3- Dos \n4- Cuatro");
            let r7 = prompt("Tu respuesta es:");
            switch (r7) {
                case "1":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Tercera pregunta: Cuantas medallas doradas consiguió Argentina en los JJOO de 2020? \n1- Doce \n2- Siete\n3- Tres \n4- Cero");
            let r8 = prompt("Tu respuesta es:");
            switch (r8) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Cuarta pregunta: Que numero usaba Ginobili en los Spurs? \n1- Diez \n2- Veinte\n3- Cinco \n4- Treinta y dos");
            let r9 = prompt("Tu respuesta es:");
            switch (r9) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Quinta pregunta: En que Olimpiadas ganó la Peque Paretto el oro en Judo? \n1- 2020 \n2- 2012\n3- 2016 \n4- 2008");
            let r10 = prompt("Tu respuesta es:");
            switch (r10) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            break;
        case "3":
            alert("Primera pregunta: Como se llamaban los gobernantes del antiguo Egipto? \n1- Basileos \n2- Faraones\n3- Alcaldes \n4- Reyes");
            let r11 = prompt("Tu respuesta es:");
            switch (r11) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Segunda pregunta: Quiénes fundaron a Roma? \n1- Rómulo y Remo \n2- Aquiles y Odiseo\n3- Alejandro Magno y Ptolomeo \n4- Marco y Polo");
            let r12 = prompt("Tu respuesta es:");
            switch (r12) {
                case "1":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Tercera pregunta: Cual es el país mas pequeño del mundo? \n1- San Marino \n2- Chipre\n3- El Salvador \n4- Ciudad del Vaticano");
            let r13 = prompt("Tu respuesta es:");
            switch (r13) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Cuarta pregunta: Que eran los samuráis? \n1- Los aliados de los espartanos \n2- Antiguos guerreros japoneses\n3- Antiguos guerreros persas \n4- Miembros de la realeza inglesa");
            let r14 = prompt("Tu respuesta es:");
            switch (r14) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Quinta pregunta: Cual fue la causa detonante de la Primera Guerra Mundial? \n1- La crisis de la bolsa de 1929\n2- El ascenso al poder de Kemal Atatürk en Turquía en 1920\n3- El asesinato del archiduque Francisco Fernando de Austria en 1914\n4- La invasión italiana de Etiopía en 1935");
            let r15 = prompt("Tu respuesta es:");
            switch (r15) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            break;
        case "4":
            alert("Primera pregunta: Que numero lleva como nombre la protagonista de Stranger Things? \n1- Doce \n2- Once\n3- Ocho \n4- Cuatro");
            let r16 = prompt("Tu respuesta es:");
            switch (r16) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Segunda pregunta: En que planeta transcurre la pelicula Avatar? \n1- Pandora \n2- Torobatl\n3- Nesus \n4- Javelin-4");
            let r17 = prompt("Tu respuesta es:");
            switch (r17) {
                case "1":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Tercera pregunta: Plan dental.. \n1- Auxilio! \n2- Que dice señor?\n3- Obra social? \n4- Lisa necesita frenos");
            let r18 = prompt("Tu respuesta es:");
            switch (r18) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Cuarta pregunta: Cual es el nombre del villano de la serie de peliculas Halloween? \n1- Jason \n2- Michael Myers\n3- Freddy Krugger \n4- Jigsaw");
            let r19 = prompt("Tu respuesta es:");
            switch (r19) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "3":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }

            alert("Quinta pregunta: Que ciudad usa de nombre el novio de Tokio en La Casa de Papel? \n1- Berlin \n2- Londres\n3- Rio \n4- Amsterdam");
            let r20 = prompt("Tu respuesta es:");
            switch (r20) {
                case "1":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "2":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                case "3":
                    alert("Respuesta correcta! Siguiente pregunta..");
                    break;
                case "4":
                    alert("Respuesta equivocada! La esfinge te ataca!");
                    vidas--;
                    break;
                default:
                    alert("Esa no es una opción disponible");

            }


    }

    if (vidas > 0) {
        alert("Sobreviviste al juego de la esfinge! Puedes escapar!");
    }
    else {
        alert("Oh no! La esfinge acabó con tu miserable vida. Juego terminado");
    }
let C = parseInt(prompt("Si quiere jugar nuevamente, elija un numero menor o igual a 5, para no jugar mas, elija un numero mayor a 5"));
R = C + r;
} while (R<=5);
