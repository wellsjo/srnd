# srnd

srnd is a set of utility functions for searching through large strings of text and wrapping search results in custom tags.

## Api

**surround(text, term, tag[, case_sensitive])**  

Simple example
```javascript
var srnd = require('srnd');

var text = 'Really, really long string of text.';

srnd.surround(text, 'really', '*');
```
```
*Really*, *really* long string of text.
```
Custom tags
```javascript
var my_tags = {
  open_tag: "<a href='some_url.com'>",
  close_tag: "</a>"
};

srnd.surround(text, 'string', my_tags);
```
```
Really, really long <a href='some_url.com'>string</a> of text.
```

**tag(text, term, properties[, case_sensitive])**  
Shorthand for creating custom HTML elements
```javascript
var text = 'I want to make a button around a word.';

// specify the element with the 'element' property
var element_properties = {
  'element': 'button',
  'class': 'btn btn-danger',
  'some_attribute': null // if an attribute is null or false, it will
                         // just appear by itself without a value
};

srnd.tag(text, 'buttons', element_properties);
// I want to make a <button class="btn btn-danger" some_attribute>button</button> around a word.
```

**highlight(text, term[, case_sensitive])**  
Shorthand for highlighting text yellow (in HTML)
```javascript
var text = 'I want to highlight a word in this sentence.';
srnd.highlight(text, 'highlight'); 
// I want to <span style="background-color: yellow">highlight</span> a word in this sentence.
```

**bold(text, term[, case_sensitive])**  
Shorthand for bolding text (in HTML)
```javascript
var text = 'I want to bold a word in this sentence.';
srnd.highlight(text, 'bold'); 
// I want to <strong>bold</strong> a word in this sentence.
```

**italicize(text, term[, case_sensitive])**  
Shorthand for italicizing text (in HTML)
```javascript
var text = 'I want to italicize a word in this sentence.';
srnd.highlight(text, 'italicize'); 
// I want to <em>italicize</em> a word in this sentence.
```

## License
MIT
