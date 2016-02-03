# Key Repeat
Keyboard input autorepeat happens when you press a key and hold it for a certain time. Extra input is simulated at regular intervals, as if you were pressing the key repeatedly. This plugin allows you to customize this behaviour with jQuery event bindings.

`keyrepeat` behaves like a `keydown` event, but is triggered after a *threshold*, every *interval* time repeatedly.

## Simple Example

```javascript
$(document).keyrepeat(function(e){
  // Some logic
}, {
  threshold: 100, // milliseconds
  interval: 10 // milliseconds
});
```
