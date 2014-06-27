surround.js is a utility function for wrapping text in any sort of tag.

It exposes the SJS object (surround.js)

SJS has two functions, surround and highlight.

SJS.surround takes 3 arguments: text to search through, the search term, and a tag.  Tag can either be a string or an object.  As a string, each instance of the search term will be surrounded by it.  As an object, the function expects two values:  tag.open_tag and tag.close_tag, which act as the opening and closing tags for the search terms.

SJS.highlight takes 3 arguments: text to search through, the search term, and class.  Class is optional.  By default, all instances of term will be wrapped in ```<span style='background-color:yellow'></span>```.  If you specify a class, the search terms will be surrounded in ```<span class="<class>"></span>```

Examples
========

SJS.surround(text, term, tag)
```
var text = 'Pretend this is a really, really, long string of text.';
SJS.surround(text, 'really', '*'); 
// Pretend this is a *really*, *really*, long string of text
```

SJS.highlight(text, term[, class])
```
var text = 'I want to highlight a word in this sentence';
SJS.highlight(text, 'highlight'); 
// I want to <span style="background-color: yellow">highlight</span> a word in this sentence
```
