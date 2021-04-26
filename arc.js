const contenedorTest = document.getElementById("test");
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const preguntas = [
    {
        pregunta: "1. Cuál es la capital de Irán?",
        respuestas: {
            a: "Bagdad",
            b: "Teherán",
            c: "Islamabad"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "2. Cuál es la capital de Irak?",
        respuestas: {
            a: "Kuwait",
            b: "Dubai",
            c: "Bagdad"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "3. Cuál es la capital de Noruega?",
        respuestas: {
            a: "Roma",
            b: "Copenague",
            c: "Estocolmo",
            d: "Oslo"
        },
        respuestaCorrecta: "d"
    },
    {
        pregunta: "4. Cuál es la capital de Serbia?",
        respuestas: {
            a: "Belgrado",
            b: "Zagreb",
            c: "Kabul"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "5. Cuál es la capital de Australia?",
        respuestas: {
            a: "Sidney",
            b: "Zurich",
            c: "Canberra"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "6. Cuál es la capital de Canadá?",
        respuestas: {
            a: "Toronto",
            b: "Montreal",
            c: "Ontario"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "7. Cuál es la capital de Vietnam?",
        respuestas: {
            a: "Puket",
            b: "Ho Chin Ming",
            c: "Pan Lao Kung"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "8. Cuál es la capital de China?",
        respuestas: {
            a: "Shangai",
            b: "Pekín",
            c: "Seul"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "9. Cuál es la capital de Pakistan?",
        respuestas: {
            a: "Islamabad",
            b: "Kuwait",
            c: "Kabul"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "10. Cuál es la capital de Marruecos?",
        respuestas: {
            a: "Casablanca",
            b: "Rabat",
            c: "Kabul"
        },
        respuestaCorrecta: "b"
    }
];


function CargarPreguntas() {
    const view = [];

    preguntas.forEach((preguntaActual, numeroPregunta) => {
        const rest = [];
        for (letraR in preguntaActual.respuestas) {
            rest.push(
                `<label>
                        <input type="radio" name="${numeroPregunta}" value="${letraR}">
                        ${letraR} :  ${preguntaActual.respuestas[letraR]}

                </label>`
            );
        }
        view.push(
            `
            <div class="question">
               ${preguntaActual.pregunta}
            </div>
              <div class="rts">
               ${rest.join('')}
            </div>
            `
        );
    });

    contenedorTest.innerHTML = view.join('');
}
CargarPreguntas();

function mostrarResultado() {
    const opRespuestas = contenedorTest.querySelectorAll('.rts');
    let cont = 0;
    preguntas.forEach((preguntaActual, numeroPregunta) => {
        const todasRts = opRespuestas[numeroPregunta];
        const checkRts = `input[name ='${numeroPregunta}']:checked`;
        const valElegida = (todasRts.querySelector(checkRts) || {}).value;
        if (valElegida === preguntaActual.respuestaCorrecta) {
            cont++;
        }

    });
    result.innerHTML = 'usted a acertado' + cont + 'preguntas de un total de' + preguntas.length;
}

btn.addEventListener('click', mostrarResultado)
