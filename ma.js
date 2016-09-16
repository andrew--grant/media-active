var MediaActive = function (mediaChangeHandler) {

    // tips:
    // http://stackoverflow.com/questions/15696124/accessing-css-media-query-rules-via-javascript-dom
    // http://www.javascriptkit.com/dhtmltutors/cssmediaqueries4.shtml
    // Browser compatibility wise, window.matchMedia() is supported in FF6+, IE10+, Chrome/ Safari,
    // // and Opera 12+. To test for browser support, you can simply test for support for the property window.matchMedia.

    this.sheets = document.styleSheets;
    var numSheets = this.sheets.length;
    var MediaQueryListCollection = {};// contains MediaQueryList objects
    var mediaChange = function (mql) {
    };

    if (mediaChangeHandler) {
        mediaChange = mediaChangeHandler;
    }

    // for all attache style sheets, inc user agent
    for (var i = 0; i < numSheets; i += 1) {

        var rules = this.sheets[i].cssRules;
        var numRules = rules == null ? 0 : rules.length;

        for (var j = 0; j < numRules; j += 1) {
            if (rules[j].constructor === CSSMediaRule) {
                // MediaQueryListCollection[j] = window.matchMedia(rules[j].media.mediaText);
                // MediaQueryListCollection[j].addListener(mediaChange);
                // mediaChange(mqls[j]);
                console.log(rules[j].media.mediaText);
            }
        }
    }
}

MediaActive.prototype.registerMediaRange = function (range, callback) {
    // both entering and leaving specified range
}

MediaActive.prototype.registerMediaRangeActivated = function (range, callback) {
    // entering specified range
}


MediaActive.prototype.registerMediaRangeDeactivated = function (range, callback) {
    // leaving specified range
}




