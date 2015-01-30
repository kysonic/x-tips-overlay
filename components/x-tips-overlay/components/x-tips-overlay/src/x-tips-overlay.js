Polymer('x-tips-overlay',{
    opened: false,
    current: 0,
    tips: null,
    active:true,
    ready: function(){

    },
    attached: function(){
        // Position of control panel
        this.position.questionMark.bind(this)();
        this.tips = this.querySelectorAll('x-tip');
        [].forEach.call(this.tips,function(tip,i){
            tip.number = i;
        });
    },
    position: {
        questionMark: function(){
            this.$.controlWrapper.style.marginLeft =  this.$.controlWrapper.getAttribute('qhpos')=='right' ? -(this.$.controlWrapper.clientWidth+10) + 'px' : this.$.controlWrapper.clientWidth+10 + 'px';
            this.$.controlWrapper.style.marginTop =  this.$.controlWrapper.getAttribute('qvpos')=='bottom' ? -(this.$.controlWrapper.clientHeight+10) + 'px' : 0 + 'px';
        }
    },
    toggle: function(){
        this.opened = !this.opened;
        if(this.active) this.opened ? this.tips[this.current].show() :  this.tips[this.current].hide();
    },
    toggleActive: function(){
        this.active = !this.active;
        this.active ? this.tips[this.current].show() :  this.tips[this.current].hide();
    },
    currentChanged: function(){
        if(this.active) {
            [].forEach.call(this.tips,function(tip,i){
                tip.hide();
            });
            this.tips[this.current].show();
        }
    },
    prev: function(){
        if(this.active) {
            this.current--;
            this.current = this.current<0 ? 0 : this.current;
        }
    },
    next: function(){
        if(this.active) {
            this.current++;
            this.current = this.current > this.tips.length - 1 ? this.tips.length - 1 : this.current;
        }
    },
    callTip: function(number) {
        if(this.active) {
            this.opened = true;
            if(this.current==number) this.tips[this.current].show();
            this.current = number;
        }
    }
});