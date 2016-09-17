var MediaActive = function (responsiveActions, validate) {

    for (var key in responsiveActions) {
        if (responsiveActions.hasOwnProperty(key)) {
            var media = window.matchMedia(key);
            responsiveActions[key].funcWrap = function (mediaQueryList) {
                responsiveActions[this.actionKey](mediaQueryList.matches);
            }
            media.actionKey = key;
            media.addListener(responsiveActions[key].funcWrap);
        }
    }

    if (validate) {
        // Are we using an action that has no corresponding
        // media rule in style sheets? Warn developer.

        // I want to know if there is an action that matches up with a media rule in any style sheets!!

        // screen and (min-width: 500px) and (max-width: 799px)
        // vs
        // screen and (max-width: 799px) and (min-width: 500px)

        // space separate and compare

        var sheets = document.styleSheets;

        for (var i = 0; i < sheets.length; i += 1) {
            var rules = sheets[i].cssRules;
            console.log(sheets[i]);
            console.log(sheets[i].href);
            for (var j = 0; j < rules.length; j += 1) {
                if (rules[j].constructor === CSSMediaRule) {
                    console.log(rules[j].media);

                }
            }
        }
    }

    //console.log(self.responsiveActions);
    //
    //for (var i = 0; i < this.numSheets; i += 1) {
    //
    //    var rules = this.sheets[i].cssRules;
    //    var numRules = rules == null ? 0 : rules.length;
    //
    //
    //    //for (var j = 0; j < numRules; j += 1) {
    //    //
    //    //    if (rules[j].constructor === CSSMediaRule) {
    //    //        console.log(rules[j]);
    //    //        if (this.responsiveActions[rules[j].media.mediaText]) {
    //    //
    //    //
    //    //            console.log("?");
    //    //
    //    //            this.MediaQueryListCollection[rules[j].media.mediaText] = window.matchMedia(rules[j].media.mediaText);
    //    //            this.MediaQueryListCollection[rules[j].media.mediaText].addListener(this.responsiveActions[rules[j].media.mediaText]);
    //    //        }
    //    //    }
    //    //}
    //
    //}


    // todo: what about if multiple media queries are the
    // same, but specified in different places/files??

    //todo: can we check if specified keys exist in CSS
    // and warn/fail if not??

    // todo: specialise in adding content strings?? woks like a lang pack??


}


