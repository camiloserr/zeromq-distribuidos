const zmq = require("zeromq")

const sock = new zmq.Subscriber();
run();


async function run(){
    sock.connect("tcp://127.0.0.1:7000");
    sock.subscribe("gato");

    console.log("conectado al servidor");

    for await (const msg of sock){
        console.log(`reciverd job ${msg.toString()}`);
    }

}