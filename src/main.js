data=[       
    {
        "id":0,
        "nombre":"Jeremías 17:5",
        "artista":"Canserbero",
        "cancion":"./assests/canciones/jeremias-muerte.mp3",
        "imagen:":"./assests/imagenes/muerte.jpg"
    },
    {
        "id":1,
        "nombre":"Perdiendo la Fé",
        "artista":"Canserbero",
        "cancion":"./assests/canciones/perdiendo-la-fe-vida.mp3",
        "imagen:":"./assests/imagenes/vida.jpg"
    },
    {
        "id":2,
        "nombre":"Es Épico",
        "artista":"Canserbero",
        "cancion":"./assests/canciones/es-epico-muerte.mp3",
        "imagen:":"./assests/imagenes/muerte.jpg"
    },
    {
        "id":3,
        "nombre":" Pensando en Tí",
        "artista":"Canserbero",
        "cancion":"./assests/canciones/pensando-en-ti-vida.mp3",
        "imagen:":"./assests/imagenes/vida.jpg"
    },
    {
        "id":4,
        "nombre":"Mundo De Piedra",
        "artista":"Canserbero",
        "cancion":"./assests/canciones/mundo-de-piedra-vida.mp3",
        "imagen:":"./assests/imagenes/muerte.jpg"
    },
    {
        "id":5,
        "nombre":"Perdóname",
        "artista":"FMK",
        "cancion":"./assests/canciones/fmk-perdoname.mp3",
        "imagen:":"./assests/imagenes/fmk.jpg"
    },
    {
        "id":6,
        "nombre":"Sola",
        "artista":"Tiago",
        "cancion":"./assests/canciones/sola-thiago.mp3",
        "imagen:":"./assests/imagenes/thiago.jpg"
    },
    {
        "id":7,
        "nombre":"NADIR",
        "artista":"Zeballos",
        "cancion":"./assests/canciones/nadir-zeballosprod.mp3",
        "imagen:":"./assests/imagenes/zeballos.jpg"
    }
    ];


const playBtn=document.querySelector("#reproductor .controls .ab .a");
const pauseBtn=document.querySelector("#reproductor .controls .ab .b");

const siguiente=document.querySelector("#reproductor .controls .flechas .arriba");
const anterior=document.querySelector("#reproductor .controls .flechas .abajo"); 

const adelantar=document.querySelector("#reproductor .controls .flechas .derecha");
const atras=document.querySelector("#reproductor .controls .flechas .izquierda");

const controls ={
    play:playBtn,
    pause:pauseBtn,
    mas:adelantar,
    menos:atras,
    sgte:siguiente,
    atras:anterior
}

const player=new AudioPlayer(data[0].cancion, document.querySelector("#reproductor"), controls);
