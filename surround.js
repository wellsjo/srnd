/**
 * surround.js
 *
 * A set of utility functions for wrapping strings of text in various ways.
 *
 * The SJS object is exposed, and it comes with the following functions:
 * SJS.surround
 * SJS.highlight
 * SJS.bold
 * SJS.italicize
 *
 * @author Wells Johnston <wellsjohnston@gmail.com>
 */

'use strict'

var SJS = {};

/**
 * surround
 *
 * Utility function for wrapping a search term in custom tags.
 *
 * @param string text       The string of text to search through.
 * @param string term       The term to search for in text.
 * @param string tag        The string that will wrap all instances of term in text.
 * @param object tag        If tag is an object, you can specify open and close tags
 *                          with tag.open_tag and tag.close_tag.
 * @param bool   case_s     (Optional) If true, search will be case sensitive.  Default is false.
 */
SJS.surround = function(text, term, tag, case_s) {
    return text.replace(term, tag + term + tag);
}


/**
 * tag
 *
 * Shorthand for creating html elements using surround.
 *
 * @param string text           String of text to search through.
 * @param string term           The search term.
 * @param object properties     This object specifies how the html element is made.
 *                              The element type is specified with "properties.element"
 *                              All other attributes are key-value pairs on the properties object.
 *                              Ex: { element: 'a', class: "btn btn-danger", hidden: null }
 *                              will produce: <a class="btn btn-danger" hidden>{term}</a>
 * @param bool   case_s         (Optional) Whether to use case-sensitive search.
 *
 */
SJS.tag = function(text, term, properties, case_s) {
    var attributes = '';
    for (attribute in properties) {
        if (attribute !== 'element') {
            if (properties[attribute] == false || properties[attribute] === null
                || properties[attribute] === 'undefined' || properties[attribute] === '') {
                attributes += attribute + ' ';
            } else {
                attributes += attribute + '="' + properties[attribute] + '" ';
            }

        }
    }
   attributes = attributes.length ? ' ' + attributes.substr(0, attributes.length - 1) : '';
    var tags = {
        open_tag: '<' + properties.element + attributes + '>',
        close_tag: '</' + properties.element + '>'
    };
    return SJS.surround(text, term, tags, case_s);
}

/**
 * highlight
 *
 * Shorthand for highlighting text yellow using surround.
 *
 * @param string text       The text to search through.
 * @param string term       The search term.
 * @param bool   case_s     Whether to use case-sensitive search.
 */
SJS.highlight = function(text, term, case_s) {
    var properties = {
        element: 'span',
        style: 'background-color:yellow',
    }
    return SJS.tag(text, term, properties, case_s);
}

/**
 * bold
 *
 * Shorthand for making text bold using surround.
 *
 * @param string text       The text to search through.
 * @param string term       The search term.
 * @param bool   case_s     Whether to use case-sensitive search.
 */
SJS.bold = function(text, term, case_s) {
    var properties = {
        element: 'strong',
    }
    return SJS.tag(text, term, properties, case_s);
}

/**
 * italicize
 *
 * Shorthand for italicizing text using surround.
 *
 * @param string text       The text to search through.
 * @param string term       The search term.
 * @param bool   case_s     Whether to use case-sensitive search.
 */
SJS.italicize = function(text, term, case_s) {
    var properties = {
        element: 'em',
    }
    return SJS.tag(text, term, properties, case_s);
}
