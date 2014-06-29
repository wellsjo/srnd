surround.js is a set of fast and powerful utility functions for searching through large strings of text and wrapping 
a search term in custom tags.
  
surround.js exposes the SJS object (surround js) and provides 5 useful functions:  
SJS.surround, SJS.tag, SJS.highlight, SJS.bold, and SJS.italicize


Usage
========

**SJS.surround(text, term, tag[, case_sensitive])**  
The most general usecase: creating custom tags around a search term
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

**SJS.tag(text, term, properties[, case_sensitive])**  
Shorthand for creating custom HTML elements
```
var text = 'I want to make a button around a word.';

var element_properties = {
  'element': 'button',
  'class': 'btn btn-danger',
  'some_attribute': null
};

SJS.tag(text, 'buttons', element_properties);
// I want to make a <button class="btn btn-danger" some_attribute>button</button> around a word.
```

**SJS.highlight(text, term[, case_sensitive])**  
Shorthand for highlighting text yellow (in HTML)
```
var text = 'I want to highlight a word in this sentence.';
SJS.highlight(text, 'highlight'); 
// I want to <span style="background-color: yellow">highlight</span> a word in this sentence.
```

**SJS.bold(text, term[, case_sensitive])**  
Shorthand for bolding text (in HTML)
```
var text = 'I want to bold a word in this sentence.';
SJS.highlight(text, 'bold'); 
// I want to <strong>bold</strong> a word in this sentence.
```

**SJS.italicize(text, term[, case_sensitive])**  
Shorthand for italicizing text (in HTML)
```
var text = 'I want to italicize a word in this sentence.';
SJS.highlight(text, 'italicize'); 
// I want to <em>italicize</em> a word in this sentence.
```
