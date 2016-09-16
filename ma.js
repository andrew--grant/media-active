var MediaActive = function (mediaChangeHandler) {

    this.sheets = document.styleSheets;
    var numSheets = this.sheets.length;
    var mqls = {};
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
            if ( rules[j].constructor === CSSMediaRule) {// rules[j].constructor === CSSMediaRule
                // mqls['mql' + j] = window.matchMedia(rules[j].media.mediaText);
                // mqls['mql' + j].addListener(mediaChange);
                // mediaChange(mqls['mql' + j]);
                console.log(rules[j].media.mediaText);
            }
        }
    }
}

MediaActive.prototype.registerMediaRange = function (range, callback) {

}

MediaActive.prototype.test = function () {

}



