/**
 * surround.js
 *
 * Utility function for wrapping a search term in custom tags.
 *
 * @param string blob       The string of text to search through
 * @param string term       The term to search for in blob
 * @param string tag        (Optional) The string that will wrap all instances of term in blob
 * @param object tag        (Optional) If tag is an object, you can specify open and close tags
 *                          with tag.open_tag and tag.close_tag
 *
 * @author Wells Johnston <wellsjohnston@gmail.com>
 */
var SJS = {}

SJS.surround = function(blob, term, tag) {
    var last_index = blob.length, indeces = Array(), index, open_tag, close_tag;
    if (typeof tag === 'undefined') {
        open_tag = '<span class="highlight">';
        close_tag = '</span>';
    } else if (typeof tag === 'string') {
        open_tag = tag;
        close_tag = tag;
    } else if (typeof tag === 'object') {
        open_tag = tag.open_tag;
        close_tag = tag.close_tag;
    }
    index = blob.toLowerCase().lastIndexOf(term.toLowerCase());
    while (index !== -1) {
        blob = blob.substring(0, index) + open_tag
            + blob.substring(index, index + term.length) + close_tag
            + blob.substring(index + term.length);
        index = blob.toLowerCase().lastIndexOf(term.toLowerCase(), index - 1);
    }
    return blob;
}

SJS.tag = function(blob, term, tag, _class) {
    new_tags = {
        open_tag: '<' + tag + ' class="' + _class + '">"',
        close_tag: '</' + tag + '>'
    };
    return SJS.surround(blob, term, new_tags);
}

SJS.highlight = function(blob, term) {
    var tag = {
        open_tag: '<span style="background-color:yellow">',
        close_tag: '</span>'
    }
    return SJS.surround(blob, term, tag);
}
