surround.js is a utility function for wrapping text in any sort of tag

surround.js exposes the SJS object (surround js).

SJS contains three functions, surround, tag, and highlight.

SJS.surround(text, term, tag[, case_sensitive])
SJS.surround takes 3 arguments, and 1 optional argument: text to search through, the search term, a tag, and whether the search is case insensitive.  Tag can either be a string or an object.  As a string, each instance of the search term will be surrounded by it.  As an object, the function expects two values:  tag.open_tag and tag.close_tag, which act as the opening and closing tags for the search terms.  If case_s is true, case sensitive search will be used.

SJS.tag(text, term, tag, class[, case_sensitive])
SJS.tag takes 4 arguments: text to search through, the search term, an html element tag, and class(es).  All instances of the search term will be wrapped in ```<[tag] class="[class]">[term]</[tag]>```.

SJS.highlight(text, term[, case_sensitive])
SJS.highlight simply makes use of tag and surround to wrap all instances of term in ```<span style="background-color:"yellow">[term]</span>"``` for quick text highlighting. 

Examples
========

SJS.surround(text, term, tag)
Surround text with custom tags
```
var text = 'Pretend this is a really, REALLY long string of text.';

// Basic markdown bolding use-case
SJS.surround(text, 'really', '*'); 
// Pretend this is a *really*, *REALLY* long string of text.

// Using case-sensitive search
SJS.surround(text, 'really', '-', true);
// Pretend this is a -really-, REALLY long string of text.

// Using custom open and close tags to create links around instances of a word
var my_tags = {
  open_tag: "<a href='some_url.com'>",
  close_tag: "</a>"
};

SJS.surround(text, 'string', my_tags);
// Pretend this is a really, REALLY long <a href='some_url.com'>string</a> of text.
```

SJS.tag(text, term, tag, class)
A clean way to create HTML elements that wrap around text
```
var text = 'I want to make buttons around a word.';

var my_tags = {
  open_tag: '<button>',
  close_tag: '</button>
};

SJS.tag(text, 'buttons', my_tags, 'btn btn-danger');
// I want to make <button class="btn btn-danger">buttons</button> around a word.
```

SJS.highlight(text, term)
Shorthand for using SJS.surround to highlight text yellow
```
var text = 'I want to highlight a word in this sentence.';
SJS.highlight(text, 'highlight'); 
// I want to <span style="background-color: yellow">highlight</span> a word in this sentence.
```
