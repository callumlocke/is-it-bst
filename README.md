# is-it-bst [![Build Status](https://travis-ci.org/callumlocke/is-it-bst.svg)](https://travis-ci.org/callumlocke/is-it-bst)

> In the UK the clocks go forward 1 hour at 1am on the last Sunday in March, and back 1 hour at 2am on the last Sunday in October.
> — [gov.uk](https://www.gov.uk/when-do-the-clocks-change)

`isItBST()` tells you whether a given `Date` object falls within British Summer Time.


## install

```sh
$ npm install is-it-bst
```

```sh
$ bower install is-it-bst
```

## use

```js
var isItBST = require('is-it-bst');

isItBST(new Date('2014-07-1')); // true

isItBST(new Date('2014-12-1')); // false

isItBST(); // true/false depending on current date
```
