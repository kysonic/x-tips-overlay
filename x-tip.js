Polymer("x-tip",{number:null,ready:function(){this.overlay="x-tips-overlay"==this.parentNode.tagName.toLowerCase()?this.parentNode:null,this.hidden=this.number!=this.overlay.current,this.overlay||console.error("x-tip cant used without x-tips-overlay"),this.setPosition(),this.setOK()},setPosition:function(){this.referrer=document.querySelector(this.selector),this.reffererRect=this.referrer.getBoundingClientRect(),this.style.left=this.reffererRect.left+parseInt(this.offsetx)+"px",this.style.top=this.reffererRect.top+parseInt(this.offsety)+"px"},setOK:function(){this.ok=this.querySelector("#ok"),this.next=this.querySelector("#next"),this.prev=this.querySelector("#prev"),this.activeOn=this.querySelector("#active-on"),this.activeOff=this.querySelector("#active-off"),this.ok&&this.ok.addEventListener("click",function(){this.overlay.opened=!1,this.hide()}.bind(this)),this.next&&this.next.addEventListener("click",function(){this.overlay.next()}.bind(this)),this.prev&&this.prev.addEventListener("click",function(){this.overlay.prev()}.bind(this)),this.activeOn&&this.activeOn.addEventListener("click",function(){this.overlay.active=!0}.bind(this)),this.activeOff&&this.activeOff.addEventListener("click",function(){this.overlay.active=!1}.bind(this))},hide:function(){this.classList.remove("go")},show:function(){this.hidden=!1,this.async(function(){this.classList.add("go")},null,100)}});