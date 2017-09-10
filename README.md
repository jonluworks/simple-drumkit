# simple-drumkit
A simple drumkit that plays drum sounds when you hit keys on your keyboard 

This could probably be a pen on codepen or a gist, but I wanted to add assets here as well. There is no real build process, so you can just download the files and run index.html to try it out.

## Core ideas

This is just a very simple example of how one can use things like

### Simple javascript-triggered css transitions

We can add css classes with transitions to add simple animations to our app. We can hook into the transitionend event to animate back 
to the initial state if we don't want to have an animation mutate the html element permanently.

### Custom data attributes

You can use custom data attributes to hold things like keypress event codes. In this example, the data attributes are used to 
store the keydown codes and associate them with a div and audio html element.

### Queryselectorall

We can use queryselectorall to get a non-live collection (array-like data structure) of elements that match a css selector.

### Audio element

HTML5 comes with native audio support so we don't have to use an audio plugin. Audio elements dont have any visual components by 
default, so we can just have them in our DOM and play them on command. If you want audio controls, HTML5 has provisions to add them
easily as well.
