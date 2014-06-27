surround.js is a utility function for wrapping text in any sort of tag

surround.js exposes the SJS object (surround js).

SJS contains three functions, surround, tag, and highlight.

SJS.surround(text, term, tag)
SJS.surround takes 3 arguments: text to search through, the search term, and a tag.  Tag can either be a string or an object.  As a string, each instance of the search term will be surrounded by it.  As an object, the function expects two values:  tag.open_tag and tag.close_tag, which act as the opening and closing tags for the search terms.

SJS.tag(text, term, tag, class)
SJS.tag takes 4 arguments: text to search through, the search term, an html element tag, and class(es).  All instances of the search term will be wrapped in ```<[tag] class="[class]">[term]</[tag]>```.

SJS.highlight(text, term)
SJS.highlight simply makes use of tag and surround to wrap all instances of term in ```<span style="background-color:"yellow">[term]</span>"``` for quick text highlighting. 

Examples
========

SJS.surround(text, term, tag)
```
var text = 'Pretend this is a really, really, long string of text.';
SJS.surround(text, 'really', '*'); 
// Pretend this is a *really*, *really*, long string of text.

var tag = {
  open_tag: "<a href='#'>",
  close_tag: "</a>"
};
SJS.surround(text, 'string', tag);
// Pretend this is a really, really long <a href='#'>string</a> of text.
```

SJS.tag(text, term, tag, class)
```
var tag = {
  open_tag: '<button>',
  close_tag: '</button>
};
SJS.tag(text, 'highlight', tag, 'custom_class');
// I want to <button class="custom_class">highlight</button>
```

SJS.highlight(text, term)
```
var text = 'I want to highlight a word in this sentence.';
SJS.highlight(text, 'highlight'); 
// I want to <span style="background-color: yellow">highlight</span> a word in this sentence.
```
