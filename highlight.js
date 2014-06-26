// tag can either be a string or an object with properties open_tag and close_tag
var highlight = function(blob, term, tag) {
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
