'use strict';

const StringDecoder = require('string_decoder').StringDecoder;

const decoder = new StringDecoder('utf8');

const getChar = (arrHex) => decoder.write(Buffer.from(arrHex));

//http://www.utf8-chartable.de

let c = {};
c.COMMERCIAL_AT = getChar([0x40]);
c.INVERTED_EXCLAMATION_MARK = getChar([0xc2, 0xa1]);
c.CENT_SIGN = getChar([0xc2, 0xa2]);
c.POUND_SIGN = getChar([0xc2, 0xa3]);
c.CURRENCY_SIGN = getChar([0xc2, 0xa4]);
c.YEN_SIGN = getChar([0xc2, 0xa5]);
c.BROKEN_BAR = getChar([0xc2, 0xa6]);
c.SECTION_SIGN = getChar([0xc2, 0xa7]);
c.DIAERESIS = getChar([0xc2, 0xa8]);
c.COPYRIGHT_SIGN = getChar([0xc2, 0xa9]);
c.FEMININE_ORDINAL_INDICATOR = getChar([0xc2, 0xaa]);
c.LEFT_POINTING_DOUBLE_ANGLE = getChar([0xc2, 0xab]);
c.RIGHT_POINTING_DOUBLE_ANGLE = getChar([0xc2, 0xbb]);
c.NOT_SIGN = getChar([0xc2, 0xac]);
c.SOFT_HYPHEN = getChar([0xc2, 0xad]);
c.REGISTERED_SIGN = getChar([0xc2, 0xae]);
c.MACRON = getChar([0xc2, 0xaf]);
c.DEGREE_SIGN = getChar([0xc2, 0xb0]);
c.PLUS_MINUS_SIGN = getChar([0xc2, 0xb1]);
c.SUPERSCRIPT_TWO = getChar([0xc2, 0xb2]);
c.SUPERSCRIPT_THREE = getChar([0xc2, 0xb3]);
c.ACUTE_ACCENT = getChar([0xc2, 0xb4]);
c.MICRO_SIGN = getChar([0xc2, 0xb5]);
c.PILCROW_SIGN = getChar([0xc2, 0xb6]);
c.MIDDLE_DOT = getChar([0xc2, 0xb7]);
c.CEDILLA = getChar([0xc2, 0xb8]);
c.SUPERSCRIPT_ONE = getChar([0xc2, 0xb9]);
c.MASCULINE_ORDINAL_INDICATOR = getChar([0xc2, 0xba]);
c.VULGAR_FRACTION_ONE_QUARTER = getChar([0xc2, 0xbc]);
c.VULGAR_FRACTION_ONE_HALF = getChar([0xc2, 0xbd]);
c.VULGAR_FRACTION_THREE_QUARTER = getChar([0xc2, 0xbe]);
c.INVERTED_QUESTION_MARK = getChar([0xc2, 0xbf]);

module.exports = c;
