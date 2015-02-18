# is-it-bst [![Build Status](https://travis-ci.org/callumlocke/is-it-bst.svg)](https://travis-ci.org/callumlocke/is-it-bst)

From [gov.uk](https://www.gov.uk/when-do-the-clocks-change):

> In the UK the clocks go forward 1 hour at 1am on the last Sunday in March, and back 1 hour at 2am on the last Sunday in October.

`isItBST(date)` works it out for you.


## install

```sh
$ npm install is-it-bst
```

Works fine in the browser using Browserify.

## use

```js
var isItBST = require('is-it-bst');

isItBST(new Date('2014-07-1')); // true

isItBST(new Date('2014-12-1')); // false

isItBST(); // true/false based on the current date
```
