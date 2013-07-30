var channelLibrary = require('../channel'),
    ChannelEvents = channelLibrary.Events,
    EventEmitter = require('events').EventEmitter,
    util = require('util');

var Node = function(options){
    options = options || {};
    this.debug = options.debug;
    this.channel = channelLibrary.getChannel(options.protocol || 'HTTP', {
        port: options.port,
        debug: false, //options.debug,
        key: options.key
    });
};

//Assumes all the nodes will have a
//`start` method. The first thing this method
//does is calling `this._start()` so the channel
//gets initialized.
Node.prototype._start = function(){
    this.channel.start();
};

Node.prototype.log = log = function(_){
    if(this.debug) {
        console.log.apply(console, arguments);
    }
};

module.exports = Node;