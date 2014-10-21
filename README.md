# is-it-bst

> In the UK the clocks go forward 1 hour at 1am on the last Sunday in March, and back 1 hour at 2am on the last Sunday in October.
> — [gov.uk](https://www.gov.uk/when-do-the-clocks-change)

This little JavaScript function tells you whether a given `Date` object falls within BST, regardless of the system locale settings.

## usage

```sh
$ npm install is-it-bst
```

```js
var isItBST = require('is-it-bst');

isItBST(new Date('2014-07-1')); // true

isItBST(new Date('2014-12-1')); // false

isItBST(); // true/false depending on current date
```
