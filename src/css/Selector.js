/**
 * Represents an entire single selector, including all parts but not
 * including multiple selectors (those separated by commas).
 * @namespace parserlib.css
 * @class Selector
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {Array} parts Array of selectors parts making up this selector.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 */
function Selector(parts, line, col){
    
    SyntaxUnit.call(this, parts.join(" "), line, col);
    
    /**
     * The parts that make up the selector.
     * @type Array
     * @property parts
     */
    this.parts = parts;

}

Selector.prototype = new SyntaxUnit();
Selector.prototype.constructor = Selector;
