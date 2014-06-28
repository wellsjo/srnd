/**
 * surround.js
 *
 * Utility function for wrapping a search term in custom tags.
 *
 * @param string blob       The string of text to search through
 * @param string term       The term to search for in blob
 * @param string tag        The string that will wrap all instances of term in blob
 * @param object tag        If tag is an object, you can specify open and close tags
 *                          with tag.open_tag and tag.close_tag
 * @param bool   case_s     (Optional) If true, search will be case sensitive.  Default is false.
 * 
 * @author Wells Johnston <wellsjohnston@gmail.com>
 */
 
var SJS = {};

SJS.surround = function(blob, term, tag, case_s) {
    var last_index = blob.length, indeces = Array(), index, open_tag, close_tag;
    if (typeof tag === 'string') {
        open_tag = tag;
        close_tag = tag;
    } else if (typeof tag === 'object') {
        open_tag = tag.open_tag;
        close_tag = tag.close_tag;
    }
    index = case_s ? blob.lastIndexOf(term) 
        : blob.toLowerCase().lastIndexOf(term.toLowerCase());
    while (index !== -1) {
        blob = blob.substring(0, index) + open_tag
            + blob.substring(index, index + term.length) + close_tag
            + blob.substring(index + term.length);
        index = case_s ? blob.lastIndexOf(term, index-1) 
            : blob.toLowerCase().lastIndexOf(term.toLowerCase(), index - 1);
    }
    return blob;
}

SJS.tag = function(blob, term, properties, case_s) {
    var attributes = '';
    for (attribute in properties) {
        if (attribute !== 'element') {
            if (properties[attribute] == false || properties[attribute] === null) {
                attributes += attribute + " ";
            } else {
                attributes += attribute + '="' + properties[attribute] + ' "';    
            }
            
        }
    }
    var element = {
        open_tag: '<' + properties.element + ' ' + attributes + '>',
        close_tag: '</' + properties.element + '>'
    };
    return SJS.surround(blob, term, element, case_s);
}

SJS.highlight = function(blob, term, case_s) {
    var tag = {
        open_tag: '<span style="background-color:yellow">',
        close_tag: '</span>'
    }
    return SJS.surround(blob, term, tag, case_s);
}
