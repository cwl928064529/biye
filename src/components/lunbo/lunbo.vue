<template>
    <div class="solid">
        <ul class="oUl"></ul>
        <ol>
            <li class="on">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ol>
    </div>
</template>
<script>
export default{
    name: "lunbo",
    data () {
        return {
            solid: null,
            btn: null,
            oUl: null,
            css: null,
            timer: 0, 
            n: 0,
        }
    },
    methods: {
        createDom() {
            var num = 100, uHTML = '', pHTML = '', tHTML = '';
            var allWidth = parseInt(getComputedStyle(this.solid, null).width);
            var width = allWidth / num;
            for (var i = 0; i < num; i++) {
                uHTML += '<li><div></div><div></div><div></div><div></div></li>';
                pHTML += '.solid ul li:nth-child(' + (i + 1) + ') div{background-position-x: ' + (-i*width) + 'px;}';
                tHTML += '.solid ul li:nth-child(' + (i + 1) + '){transition: 0.8s ' + (0.3 * i / num) + 's}';
            }
            this.oUl.innerHTML = uHTML;
            this.css.innerHTML += pHTML + tHTML  + '.solid ul li, .solid ul li div{width:' + width + 'px;height:100%}';
            this.bindEvent();
            this.play();
        },
        bindEvent() {
            for (var i = 0; i < this.btn.length; i++) {
                this.btn[i].index = i;
                this.btn[i].onclick = (e) => {
                    let ele = e.target;
                    this.n = ele.index;
                    for (var i = 0; i < this.btn.length; i++) {
                        this.btn[i].className = '';
                    }
                    ele.className = 'on';
                    this.css.innerHTML += '.solid ul li{transform: translateZ(-180px) rotateX(' + (this.n * 90) + 'deg);}';
                }
            };
            this.solid.onmouseenter = () => {
                clearInterval(this.timer);
            };
            this.solid.onmouseleave = () => {
                this.play();
            };
        },
        play() {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.n++;
                this.n %= 4;
                for (var i = 0; i < this.btn.length; i++) {
                    this.btn[i].className = '';
                }
                this.btn[this.n].className = 'on';
                this.css.innerHTML += '.solid ul li{transform: translateZ(-180px) rotateX(' + (this.n * 90) + 'deg);}';
            }, 2000);
        }
    },
    mounted () {
        this.solid = document.getElementsByClassName('solid')[0];
        this.btn = document.querySelectorAll('ol li');
        this.oUl = document.getElementsByClassName('oUl')[0];
        this.css = document.getElementsByTagName('style')[5];
        console.log(this.css);
        this.createDom();
    }
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li {
        list-style: none;
    }
    .solid {
        position: absolute;
        left: 50%;
        top: 140px;
        width: 800px;
        height: 360px;
        margin-left: -468px;
        box-shadow: 1px 7px 25px #fd8fd9;
    }
    .solid ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .solid ul li {
        position: relative;
        float: left;
        box-sizing: border-box;
        transform-style: preserve-3d;
        transform: translateZ(-180px);
    }
    .solid ul li div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .solid ul li div:nth-child(1) {  
        top: -360px;
        background-image: url('./kj1.jpg'); 
        transform-origin: bottom;
        transform: translateZ(180px) rotateX(90deg);
    }
    .solid ul li div:nth-child(2) { 
        top: 360px;
        background-image: url('./kj2.jpg'); 
        transform-origin: top;
        transform: translateZ(180px) rotateX(-90deg);
    }
    .solid ul li div:nth-child(3) {    
        background-image: url('./kj5.jpg'); 
        transform: translateZ(180px);
    }
    .solid ul li div:nth-child(4) {   
        background-image: url('./kj4.jpg');
        transform: translateZ(-180px) rotateX(180deg);
    }
    .solid ol {
        position: absolute;
        left: 50%;
        bottom: -30px;
        width: 140px;
        height: 20px;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-around;
    }
    .solid ol li {
        width: 20px;
        height: 20px;
        background: black;
        box-shadow: 0 2px 5px white;
        border-radius: 50%;
        color: white;
        text-align: center;
        /*斜体 12px大小/20px行高*/
        font: italic 12px/20px 'Microsoft Yahei';
        cursor: pointer;
    }
    .solid ol li.on {
        background: red;
    }
    
</style>