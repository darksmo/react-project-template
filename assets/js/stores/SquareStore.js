var Fluxxor = require('../../vendor/fluxxor/fluxxor.min'),
    Constants = require('../constants');

var CHANGE_EVENT = 'change';

var SquareStore = Fluxxor.createStore({
    initialize: function () {
        this.squares = [];

        this.bindActions(Constants.ADD_SQUARE, this.handleAddSquare);
    },
    handleAddSquare: function (payload) {
        this.squares.push({
            name : payload.squareName
        });
        this.emit(CHANGE_EVENT);
    },
    getState: function () {
        return {
            squares: this.squares
        };
    }
});

module.exports = SquareStore;
