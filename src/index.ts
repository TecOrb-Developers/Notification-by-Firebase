import logger from 'jet-logger';
import server from './server';
const { createServer } = require("http");

// Constants
const serverStartMsg = 'Express server started on port: ',
port = (process.env.PORT || 3000);

const httpServer = createServer(server);
// Start server
httpServer.listen(port, () => {
    logger.info(serverStartMsg + port);
    console.log(serverStartMsg + port);
});


var events = require('events');
const eventEmitter = new events.EventEmitter();


