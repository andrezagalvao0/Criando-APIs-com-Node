
//importando //vai buscar na pasta node_modules
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');


//const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
//const router = express.Router();



server.listen(port);
server.on('error', onError); //quando acontece algum erro, achar a função onError
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

//função para normalizar a porta da aplicação
function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

//Gerenciamento de erro do servidor
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code){
        case 'EACCES':   //SE ERRO DE PERMISSÃO
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':     //Se erro de endereço em uso
            console.error(binf + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;    
    }
} 

//Iniciando o debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}