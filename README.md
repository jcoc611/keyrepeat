# Key Repeat
Keyboard input autorepeat happens when you press a key and hold it for a certain time. Extra input is simulated at regular intervals, as if you were pressing the key repeatedly. This plugin allows you to customize this behaviour with jQuery event bindings.

`keyrepeat` behaves like a `keydown` event, but is triggered after a *delay*, every *interval* time repeatedly.

## Installation
You can easily install this plugin with:
```bash
bower install jquery-keyrepeat
```

## Simple Example

```javascript
$(document).keyrepeat(function(e){
  // Some logic
}, {
  delay: 100, // milliseconds - time before first repeat
  interval: 10 // milliseconds - time between repeats
});
```

## Function Example

In addition to specifying constants for the *delay* and *interval* values, you can also provide functions that return dynamic values:

```javascript
$(document).keyrepeat(function(e){
    // Your code
}, {
    delay: function(e, count, options){
        // e - original jQuery keydown event
        // count - the number of times keyrepeat has been called
        // options - the options passed to keyrepeat
        return 10; // Return any millisecond value
    }, interval: function(e, count){
        // This one gets faster!
        // Remember, the smaller the value returned, the faster keyrepeat is fired.
        return Math.max(5, Math.floor(100/count));
    } 
})
```

## License

All contents of this repository are licensed under the MIT License (See LICENSE).

## Contribution
Feel free to open issues and pull requests!

Keep holding on to your keys passionately,
JC
