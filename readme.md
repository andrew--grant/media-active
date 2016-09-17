## Responsive Actions - A handy utility to simplify reacting to media queries

### How it works

This very small utility script aims to do just a couple of things. 

It can help you keep all of your media query breakpoints together using a succinct 'key/value' syntax. The key is your media query. The value is a function that you want to execute when this media query is activated and/or deactivated.

The media queries are checked upon page load (MediaQueryList.matches) and on an event driven basis (MediaQueryList.addListener). Your action wil be passed a truthy value that will tell you if this media query was just activated or deactivated. If you need the original mediaQueryList object, it is available as the second argument.

The example below should clarify how you might go about using this.

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


Of course, you can be more creative than this.