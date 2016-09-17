var responsiveActions=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=window.matchMedia(b);c.actionKey=b,c.matches&&a[b](!0,c),a[b].funcWrap=function(b){a[this.actionKey](b.matches,b)},c.addListener(a[b].funcWrap)}};


