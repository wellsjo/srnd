function highlight(html, term) {
    var last_index = 0, indeces = Array(), index;
    while (html.toLowerCase().indexOf(term.toLowerCase(), last_index) !== -1) {
        index = html.toLowerCase().indexOf(term.toLowerCase(), last_index);
        indeces.push(index);
        last_index = index + 1;
    }
    while (indeces.length) {
        index = indeces.pop();
        var html = html.substring(0, index) + '<span class="s_hl">' + html.substring(index, index + term.length) + '</span>' + html.substring(index + term.length);
    }
    return html;
}
