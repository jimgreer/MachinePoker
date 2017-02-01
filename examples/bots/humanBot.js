const readlineSync = require('readline-sync');

module.exports = function () {

  var info = {
    name: "HumanBot"
  };

  function update(game) {
    if (game.state !== "complete") {
      const actions = ['fold', 'raise', 'call'];

      action = readlineSync.keyInSelect(actions, 'Action? ');
      console.log('human chose: ' + actions[action]);
      switch (actions[action]) {
        case 'fold':
          return game.betting.fold;

        case 'call':
          return game.betting.call;

        case 'raise':
          return game.betting.raise;
      }
    }
  };

  return { update: update, info: info }

}
