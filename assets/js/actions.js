var Constants = require('./constants');

module.exports = {
    addSquare: function(aName) {
       this.dispatch(Constants.ADD_SQUARE, {
           squareName: aName
       });
    }
};
