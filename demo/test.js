var Marquee = (function(){
    function Marquee(Obj) {
        this.marquee = Obj.marquee;
        this.direction = Obj.direction || 'left';
        this.speed = Obj.speed || 13;
        this.marquee_value = 0;

        this.init();
    }
    Marquee.prototype.init = function () {
        var mySetInterval = setInterval(this.openTask(),this.speed);
        var that = this;
        this.marquee.parentNode.onmouseenter = function () {
            clearInterval(mySetInterval)
        };
        this.marquee.parentNode.onmouseleave = function () {
            mySetInterval = setInterval(that.openTask(),that.speed)
        };
    };

    Marquee.prototype.openTask = function () {
        var that = this;
        switch (this.direction) {
            case 'right':
                return function () {
                    if(that.marquee_value <= 0){
                        that.marquee_value++;
                    }
                    else{
                        that.marquee_value -= that.marquee.offsetWidth;
                    }
                    that.marquee.parentNode.style.marginLeft = that.marquee_value +"px";
                };
            case 'top':
                return function () {
                    if(0 <= that.marquee.offsetHeight+that.marquee_value){
                        that.marquee_value--;
                    }
                    else{
                        that.marquee_value += that.marquee.offsetHeight;
                    }
                    that.marquee.parentNode.style.marginTop = that.marquee_value +"px";
                };
            case 'bottom':
                return function () {
                    if(that.marquee_value <= 0){
                        that.marquee_value++;
                    }
                    else{
                        that.marquee_value -= that.marquee.offsetHeight;
                    }
                    that.marquee.parentNode.style.marginTop = that.marquee_value +"px";
                };
            default: return function () {
                if(0 <= that.marquee.offsetWidth + that.marquee_value){
                    that.marquee_value--;
                }
                else{
                    that.marquee_value += that.marquee.offsetWidth;
                }
                that.marquee.parentNode.style.marginLeft = that.marquee_value +"px";
            };
        }
    };
    return Marquee;
})();




function Tabs(Obj) {
    this.controls_list = Obj.controls_list;
    this.views_list = Obj.views_list;
    this.active_class = Obj.active_class || 'active';
    this.tabs_type = Obj.tabs_type;
    this.index = 0;
    this.init();
}
Tabs.prototype.init = function () {
    var that = this;

    for(var i = 0; i<this.controls_list.length;i++){
        if(this.tabs_type === 'left'){
            //console.log(that.controls_list[i].style)
        }
        (function(j){
            that.controls_list[j].onclick = function () {
                if(that.index === j) return;
                that.changeClass(j, that.controls_list);
                that.changeClass(j, that.views_list);
                that.index = j;
            }
        })(i);
    }
};
Tabs.prototype.changeClass = function (curr, obj) {
    if(this.index === curr)return;
    var classNameTemp = obj[this.index].className;
    obj[curr].className = classNameTemp;
    classNameTemp = classNameTemp.replace(this.active_class ,'');
    console.log(this.active_class);
    obj[this.index].className = classNameTemp;
};