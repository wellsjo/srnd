/**
 * Utility functions for wrapping strings of text in various ways.
 *
 * @author Wells Johnston <w@wellsjohnston.com>
 */

'use strict'

var srnd = {};
module.exports = srnd;

/**
 * Utility function for wrapping a search term in custom tags.
 *
 * @param {string} text The string of text to search through.
 * @param {string} term The term to search for in text.
 * @param {string|object} tag The string that will wrap all instances of term
 * in text. If tag is an object, you can specify open and close tags with tag.
 * @param bool caseSensitive Optional. If true, search will be case sensitive. Default
 * is false.
 */

srnd.surround = function(text, term, tag, caseSensitive) {
  var index, open_tag, close_tag;
  var last_index = text.length;
  var varindeces = Array();
  if (caseSensitive == null) {
    caseSensitive = true;
  }
  if (typeof tag === 'string') {
    open_tag = tag;
    close_tag = tag;
  } else if (typeof tag === 'object') {
    open_tag = tag.open_tag;
    close_tag = tag.close_tag;
  }
  index = caseSensitive ? text.lastIndexOf(term) : text.toLowerCase().lastIndexOf(
    term.toLowerCase());
  while (index !== -1) {
    text = text.substring(0, index) + open_tag + text.substring(index, index +
      term.length) + close_tag + text.substring(index + term.length);
    index = caseSensitive ? text.lastIndexOf(term, index - 1) : text.toLowerCase().lastIndexOf(
      term.toLowerCase(), index - 1);
  }
  return text;
};

/**
 * Shorthand for creating html elements using surround.
 *
 * @param string text String of text to search through.
 * @param string term The search term.
 * @param object properties This object specifies how the html element is made.
 * The element type is specified with "properties.element". All other
 * attributes are key-value pairs on the properties object.Ex: { element: 'a',
 * class: "btn btn-danger", hidden: null } will produce: <a class="btn
 * btn-danger" hidden>{term}</a>
 * @param bool caseSensitive Optional) Whether to use case-sensitive search.
 */

srnd.tag = function(text, term, properties, caseSensitive) {
  var attributes = '';
  for (attribute in properties) {
    if (attribute !== 'element') {
      if (properties[attribute]) {
        attributes += attribute + ' ';
      } else {
        attributes += attribute + '="' + properties[attribute] + '" ';
      }

    }
  }
  attributes = attributes.length ? ' ' + attributes.substr(0, attributes.length -
    1) : '';
  var tags = {
    open_tag: '<' + properties.element + attributes + '>',
    close_tag: '</' + properties.element + '>'
  };
  return srnd.surround(text, term, tags, caseSensitive);
};
