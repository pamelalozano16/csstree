var TYPE = require('../../scanner').TYPE;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;

// currently only Grid Layout uses square brackets, but left it universal
// https://drafts.csswg.org/css-grid/#track-sizing
// [ ident* ]
module.exports = function Brackets(readSequence) {
    var start = this.scanner.tokenStart;
    var children;

    this.scanner.eat(LEFTSQUAREBRACKET);
    children = readSequence.call(this);
    this.scanner.eat(RIGHTSQUAREBRACKET);

    return {
        type: 'Brackets',
        loc: this.getLocation(start, this.scanner.tokenStart),
        children: children
    };
};