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
    var last_index = 0, indeces = Array(), index, open_tag, close_tag;
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
    while (blob.toLowerCase().indexOf(term.toLowerCase(), last_index) !== -1) {
        index = blob.toLowerCase().indexOf(term.toLowerCase(), last_index);
        indeces.push(index);
        last_index = index + 1;
    }
    while (indeces.length) {
        index = indeces.pop();
        var blob = blob.substring(0, index) + open_tag
            + blob.substring(index, index + term.length) + close_tag
            + blob.substring(index + term.length);
    }
    return blob;
}

SJS.highlight = function(blob, term, _class) {
    if (typeof _class === 'undefined') {
        var open_tag = '<span style="background-color: yellow">';
    }
    var tag = {
        open_tag: typeof open_tag === 'undefined' ? "<span class='" + _class + "'>" : open_tag,
        close_tag: "</span>"
    }
    return SJS.surround(blob, term, tag);
}
