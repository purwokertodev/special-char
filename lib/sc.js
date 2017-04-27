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
c.LATIN_CAPITAL_LETTER_A_WITH_GRAVE = getChar([0xc3, 0x80]);
c.LATIN_CAPITAL_LETTER_A_WITH_ACUTE = getChar([0xc3, 0x81]);
c.LATIN_CAPITAL_LETTER_A_WITH_CIRCUMFLEX = getChar([0xc3, 0x82]);
c.LATIN_CAPITAL_LETTER_A_WITH_TILDE = getChar([0xc3, 0x83]);
c.LATIN_CAPITAL_LETTER_A_WITH_DIAERESIS = getChar([0xc3, 0x84]);
c.LATIN_CAPITAL_LETTER_A_WITH_RING_ABOVE = getChar([0xc3, 0x85]);
c.LATIN_CAPITAL_LETTER_AE = getChar([0xc3, 0x86]);
c.LATIN_CAPITAL_LETTER_C_WITH_CEDILLA = getChar([0xc3, 0x87]);
c.LATIN_CAPITAL_LETTER_E_WITH_GRAVE = getChar([0xc3, 0x88]);
c.LATIN_CAPITAL_LETTER_E_WITH_ACUTE = getChar([0xc3, 0x89]);
c.LATIN_CAPITAL_LETTER_E_WITH_CIRCUMFLEX = getChar([0xc3, 0x8a]);
c.LATIN_CAPITAL_LETTER_E_WITH_DIAERESIS = getChar([0xc3, 0x8b]);
c.LATIN_CAPITAL_LETTER_I_WITH_GRAVE = getChar([0xc3, 0x8c]);
c.LATIN_CAPITAL_LETTER_I_WITH_ACUTE = getChar([0xc3, 0x8d]);
c.LATIN_CAPITAL_LETTER_I_WITH_CIRCUMFLEX = getChar([0xc3, 0x8e]);
c.LATIN_CAPITAL_LETTER_I_WITH_DIAERESIS = getChar([0xc3, 0x8f]);
c.LATIN_CAPITAL_LETTER_ETH = getChar([0xc3, 0x90]);
c.LATIN_CAPITAL_LETTER_N_WITH_TILDE = getChar([0xc3, 0x91]);
c.LATIN_CAPITAL_LETTER_O_WITH_GRAVE = getChar([0xc3, 0x92]);
c.LATIN_CAPITAL_LETTER_O_WITH_ACUTE = getChar([0xc3, 0x93]);
c.LATIN_CAPITAL_LETTER_O_WITH_CIRCUMFLEX = getChar([0xc3, 0x94]);
c.LATIN_CAPITAL_LETTER_O_WITH_TILDE = getChar([0xc3, 0x95]);
c.LATIN_CAPITAL_LETTER_O_WITH_DIAERESIS = getChar([0xc3, 0x96]);
c.MULTIPLICATION_SIGN = getChar([0xc3, 0x97]);
c.LATIN_CAPITAL_LETTER_O_WITH_STROKE = getChar([0xc3, 0x98]);
c.LATIN_CAPITAL_LETTER_U_WITH_GRAVE = getChar([0xc3, 0x99]);
c.LATIN_CAPITAL_LETTER_U_WITH_ACUTE = getChar([0xc3, 0x9a]);
c.LATIN_CAPITAL_LETTER_U_WITH_CIRCUMFLEX = getChar([0xc3, 0x9b]);
c.LATIN_CAPITAL_LETTER_U_WITH_DIAERESIS = getChar([0xc3, 0x9c]);
c.LATIN_CAPITAL_LETTER_Y_WITH_ACUTE = getChar([0xc3, 0x9d]);
c.LATIN_CAPITAL_LETTER_THORN = getChar([0xc3, 0x9e]);
c.LATIN_SMALL_LETTER_SHARP_S = getChar([0xc3, 0x9f]);

module.exports = c;
