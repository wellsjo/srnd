surround.js is a utility function for searching through large strings of text and wrapping 
a search term in custom tags.

surround.js exposes the SJS object (surround js).
```
// The most general usecase: creating custom tags around a search term
SJS.surround(text, term, tag[, case_sensitive])

// Shorthand for creating custom HTML elements, with any attributes
SJS.tag(text, term, element_options[, case_sensitive])

// Shorthand for highlighting text in HTML
SJS.highlight(text, term[, case_sensitive])

// Shorthand for bolding text in HTML
SJS.bold(text, term[, case_sensitive])

// Shorthand for italicizing text in HTML
SJS.italicize(text, term[, case_sensitive])
```

Examples
========

**SJS.surround(text, term, tag[, case_sensitive])**  
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

**SJS.tag(text, term, element_options[, case_sensitive])**  
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

**SJS.highlight(text, term[, case_sensitive])**  
Shorthand for using SJS.surround to highlight text yellow
```
var text = 'I want to highlight a word in this sentence.';
SJS.highlight(text, 'highlight'); 
// I want to <span style="background-color: yellow">highlight</span> a word in this sentence.
```
