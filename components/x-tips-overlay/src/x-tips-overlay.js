Polymer('x-tips-overlay',{
    opened: false,
    ready: function(){

    },
    attached: function(){
        // Position of question mark button
        this.position.questionMark.bind(this)();
    },
    position: {
        questionMark: function(){
            this.$.questionMark.style.marginLeft =  this.$.questionMark.getAttribute('qhpos')=='right' ? -(this.$.questionMark.clientWidth+10) + 'px' : this.$.questionMark.clientWidth+10 + 'px';
            this.$.questionMark.style.marginTop =  this.$.questionMark.getAttribute('qvpos')=='bottom' ? -(this.$.questionMark.clientHeight+10) + 'px' : 0 + 'px';
        }
    }
});