# srnd

srnd provides utility functions for searching through large strings of text and wrapping search results in custom tags.

## Api

**surround(text, term, tag[, caseSensitive])**  

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
var tags = {
  open_tag: "<a href='some_url.com'>",
  close_tag: "</a>"
};

srnd.surround(text, 'string', tags);
```
```
Really, really long <a href='some_url.com'>string</a> of text.
```

**tag(text, term, properties[, caseSensitive])**  

Shorthand for creating HTML elements.

Example
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

## License
MIT
