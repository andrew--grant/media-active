var responsiveActions = function (actions) {
    for (var key in actions) {
        if (actions.hasOwnProperty(key)) {
            var mediaQueryList = window.matchMedia(key);
            mediaQueryList.actionKey = key;
            if (mediaQueryList.matches) {
                actions[key](true, mediaQueryList);
            }
            actions[key].funcWrap = function (mediaQueryList) {
                actions[this.actionKey](mediaQueryList.matches, mediaQueryList);
            }
            mediaQueryList.addListener(actions[key].funcWrap);
        }
    }
}


