const helloMessage = require('./hello-message')


var sayMessage = function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

module.exports =  { sayMessage} ;
