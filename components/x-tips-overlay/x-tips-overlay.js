Polymer("x-tips-overlay",{opened:!1,ready:function(){},attached:function(){this.position.questionMark.bind(this)()},position:{questionMark:function(){this.$.questionMark.style.marginLeft="right"==this.$.questionMark.getAttribute("qhpos")?-(this.$.questionMark.clientWidth+10)+"px":this.$.questionMark.clientWidth+10+"px",this.$.questionMark.style.marginTop="bottom"==this.$.questionMark.getAttribute("qvpos")?-(this.$.questionMark.clientHeight+10)+"px":"0px"}}});