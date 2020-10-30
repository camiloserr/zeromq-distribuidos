const zmq = require("zeromq")

const sock = new zmq.Publisher();
run();

async function run(){
    await sock.bind("tcp://127.0.0.1:7000");
    console.log("servidor escuchando en el puerto 7000");
    console.log("Presionee cualquier tecla para continuar");
    //process.stdin.once("data", send);
}

function submit(){
    var asunto = document.getElementById("asunto");
    var contenido = document.getElementById("contenido");

    await sendInfo(asunto, contenido);
}

async function sendInfo( topic, message){
    await sock.send([topic , message]);
    console.log(`enviado ${topic} : ${message}`)
}

