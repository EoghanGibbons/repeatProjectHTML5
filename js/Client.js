//Object that handles WebSocket connections and sending messages.
function Client()
{
  //For testing... change the ip (the host) when you are running on a device
  var host='89.100.117.199';
  var port=8080;

  this.messageHandler = new MessageHandler();
  
  //Creates a websocket and sets up the handlers
  this.ws = new WebSocket("ws://" + host + ":" + port +'/wstest');
 
          this.ws.onmessage = function(evt) {game.net.messageHandler.handleMessage(evt); };
 
          this.ws.onclose = function(evt) { console.log("Connection close"); };
 
          this.ws.onopen = function(evt) { console.log('open connection');
                                      game.net.join(game.playerName) ;  };
}

//To join the game
Client.prototype.join = function(name)
{
  data={};    
  data.type="join";
  data.pid="IOSPlayer";
  this.ws.send(JSON.stringify(data));
}


//To send an object to the server
Client.prototype.send = function(x, y)
{
  var data={};    
  data.type="paddleUpdate";
  data.xPos = x;
  
  game.net.ws.send(JSON.stringify(data));
}

