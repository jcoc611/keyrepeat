# Key Repeat
Keyboard input autorepeat happens when you press a key and hold it for a certain time. Extra input is simulated at regular intervals, as if you were pressing the key repeatedly. This plugin allows you to customize this behaviour with jQuery event bindings.

`keyrepeat` behaves like a `keydown` event, but is triggered after a *delay*, every *interval* time repeatedly.

## Simple Example

```javascript
$(document).keyrepeat(function(e){
  // Some logic
}, {
  delay: 100, // milliseconds
  interval: 10 // milliseconds
});
```


## License

All contents of this repository are licensed under the MIT License (See LICENSE).

## Contribution
Feel free to open issues and pull requests!

Keep holding on to your keys passionately,
JC