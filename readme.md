## Responsive Actions - A handy utility to simplify reacting to media queries

### What is it?

This tiny utility revolves around the use of window.matchMedia.   

I wanted a way to keep all my media query breakpoints together using a succinct 'key/value' format. Where *key* is a media query, and *value* is an action (function) I want to run when this media query is matched/unmatched. I also wanted to have my media queries checked upon page load (MediaQueryList.matches) as well as on an event driven basis (MediaQueryList.addListener). This is basically all this script does.

### How do I use it?

Your actions wil be passed a truthy value, this value will tell you if the associated media query was just activated or deactivated. Should you need the original mediaQueryList object, as passed to event handlers when working directly with MediaQueryList.addListener, you will find it passed as the second argument.

The key is a media query. The value is a function that will execute when this media query is activated and/or deactivated. The example below should clarify how you might go about using this.

    var actions = {

        'screen and (min-width: 500px) and (max-width: 799px)': function (matches) {

            if (matches) {
                console.log("500 to 799 is now active");
            } else {
                console.log("500 to 799 is no longer active");
            }

        },

        'screen and (min-width: 900px)': function (matches) {

            if (matches) {
                console.log("900 plus is active");
            } else {
                console.log("900 plus is no longer active");
            }

        }

    }

    responsiveActions(actions);


Too easy. Of course, you can be more creative than this.