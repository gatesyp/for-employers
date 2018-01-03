/iPad|iPhone|iPod/g.test(navigator.userAgent)&&(jQuery.fn._focus=jQuery.fn.focus,jQuery.fn.focus=function(){return this.is("input, textarea")?$(":focus").length?this._focus():this:this._focus()});
