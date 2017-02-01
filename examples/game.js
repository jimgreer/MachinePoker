var MachinePoker = require('../lib/index')
    , LocalSeat = MachinePoker.seats.JsLocal
    , RandBot = require('./bots/randBot')
    , Status3Bot = require('./bots/status3Bot')
    , HumanBot = require('./bots/humanBot')
    , narrator = MachinePoker.observers.narrator
    , fileLogger = MachinePoker.observers.fileLogger('./examples/results.json');

var table = MachinePoker.create({
  maxRounds: 10
});

var players = [
  LocalSeat.create(Status3Bot),
  LocalSeat.create(HumanBot)
];
table.addPlayers(players);
table.on('tournamentClosed', function () { process.exit() } );
table.start();

// Add some observers
table.addObserver(narrator);
table.addObserver(fileLogger);

