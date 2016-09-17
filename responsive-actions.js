var responsiveActions = function (actions) {
    for (var key in actions) {
        if (actions.hasOwnProperty(key)) {
            var media = window.matchMedia(key);
            media.actionKey = key;
            // initial page load
            if (media.matches) {
                actions[key](true);
            }
            // event driven
            actions[key].funcWrap = function (mediaQueryList) {
                actions[this.actionKey](mediaQueryList.matches, mediaQueryList);
            }
            media.addListener(actions[key].funcWrap);
        }
    }
}


