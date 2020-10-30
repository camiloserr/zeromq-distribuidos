const zmq = require("zeromq")

const sock = new zmq.Publisher();
run();

async function run(){
    await sock.bind("tcp://127.0.0.1:7000");
    console.log("servidor escuchando en el puerto 7000");
    console.log("Presionee cualquier tecla para continuar");
    //process.stdin.once("data", send);
}

async function sendInfo( topic, message){
    await sock.send(["gato" , "miau"]);
    console.log(`enviado ${topic} : `)
}

async function send(){
    console.log("Enviando info...");
    for(let i = 0 ; i < 100 ; i++){
        await sock.send(["gato" , "miau"]);

        await new Promise(resolve => setTimeout(resolve, 500));
    }
}