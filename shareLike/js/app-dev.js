
var noAward = [
    { gifts: "沒獎", quantity: "55", change: "55%"},
    { gifts: "沒獎", quantity: "55", change: "55%"},
    { gifts: "沒獎", quantity: "55", change: "55%"},
    { gifts: "沒獎", quantity: "55", change: "55%"},
];
var hasAward = [
    { gifts: "有獎", quantity: "55", change: "55%",},
    { gifts: "有獎", quantity: "55", change: "55%",},
    { gifts: "有獎", quantity: "55", change: "55%",},
    { gifts: "有獎", quantity: "55", change: "55%",},
    { gifts: "有獎", quantity: "55", change: "55%",},
];

var app = new Vue({
    el: '#app',
    data: {
        awardLists: [],
        hasAward: [],
        noAward: [],
        popupOpen: false,
        privacy: false,
        showAward: false,
        showEnd: false,
        showCus: false,
        showCoupon: false,
    },
    props: {
    },
    watch: {
    },
    computed: {
    },
    methods: {
        start: function(hasAward) {
            /// 僅是示意 請換成api再麻煩真實版本
            var vm = this;
            if(hasAward) {
                vm.getAwardstatus();
                
            } else {
                vm.popupOpen = true;
                vm.showEnd = true;
            }
        },
        getAwardstatus: function() {
            /// 僅是示意 請換成api再麻煩真實版本
            var vm = this;

            //清空列表
            vm.noAward.splice(0,vm.noAward.length);
            vm.hasAward.splice(0,vm.hasAward.length);

            for (var i = 0; i < noAward.length; i++) {
                vm.noAward.push(
                    noAward[i]
                )
            }

            for (var i = 0; i < hasAward.length; i++) {
                vm.hasAward.push(
                    hasAward[i]
                )
            }

            vm.popupOpen = true;
            vm.showAward = true;
        },
        goPrivacy: function() {
            var vm = this;
            vm.popupOpen = true;
            vm.privacy = true;
        },
        initCoupon: function() {
            var vm = this;
            // 取得獎品
            // 建立canvas
            // 將獎品圖放入
            // 繪出
            vm.showAward= false;
            vm.showCoupon= true;
            
            function draw() {
                
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");
                var w = canvas.parentNode.offsetWidth;
                var h = canvas.parentNode.offsetHeight;
                canvas.width = w;
                canvas.height = h;
                console.log("canvas width&h :"+canvas.width+canvas.height)

                /*灰色背景*/
                context.fillStyle = "#ccc";
                context.fillRect(0, 0, w, h);

                context.globalCompositeOperation = "destination-out";
                // var offsetX = canvas.parentNode.offsetLeft;
                var offsetX = $('.coupon__cover').offset().left
                // var offsetY = canvas.parentNode.offsetTop;
                var offsetY = $('.coupon__cover').offset().top
                var mousedown = false;

                canvas.addEventListener("touchstart", function(e) {
                    e.preventDefault();
                    mousedown = true;
                });

                canvas.addEventListener("touchstart", function(e) {
                    e.preventDefault();
                    mousedown = true;
                });

                canvas.addEventListener("touchmove", function(e) {
                    e.preventDefault();
                    if (mousedown) {
                        if (e.changedTouches) {
                            e = e.changedTouches[e.changedTouches.length - 1];
                        }
                        var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
                        var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
                        context.beginPath()
                        context.arc(x, y, 50, 0, Math.PI * 2);
                        context.fill();
                    }
                });

                canvas.addEventListener("touchend", function(e) {
                    e.preventDefault();
                    mousedown = false;
                    var num = 0;
                    var datas = context.getImageData(50, 25, w - 110, h - 50);
                    for (var i = 0; i < datas.data.length; i++) {
                        if (datas.data[i] == 0) {
                            num++;
                        };
                    };
                    if (num >= datas.data.length * 0.25) {
                    // 達到面積要求時執行的內容       
                        $('#myCanvas').remove(); 
                        vm.scratchCoupon(); 
                    }
                });

                canvas.addEventListener("mousedown", function(e) {
                    e.preventDefault();
                    mousedown = true;
                });

                canvas.addEventListener("mousemove", function(e) {
                    e.preventDefault();

                    console.log(e)
                    if (mousedown) {
                        if (e.changedTouches) {
                            e = e.changedTouches[e.changedTouches.length - 1];
                        }
                        var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
                        var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;

                        console.log(x+","+document.body.scrollLeft+","+e.pageX,","+offsetX);
                        context.beginPath()
                        context.arc(x, y, 50, 0, Math.PI * 2);
                        context.fill();
                    }
                });

                canvas.addEventListener("mouseup", function(e) {
                    e.preventDefault();
                    mousedown = false;
                    var num = 0;
                    var datas = context.getImageData(50, 25, w - 110, h - 50);
                    for (var i = 0; i < datas.data.length; i++) {
                        if (datas.data[i] == 0) {
                            num++;
                        };
                    };
                    if (num >= datas.data.length * 0.25) {
                        // 達到面積要求時執行的內容    
                        $('#myCanvas').remove();
                        vm.scratchCoupon(); 
                    }
                });
            }

            $.ajax({
                type: 'get',
                url: 'http://www.google.com',
                dataType: 'json',
                beforeSend: function() {
                    $('<canvas>').attr({id:'myCanvas'}).appendTo('.coupon__cover');
                    $('div.coupon__award').css({
                        background: 'url(images/reward-demo.png) center center no-repeat',
                        backgroundSize: '100% auto'
                    });
                },
                success: function(result, textStatus, jqXHR) {
                    console.log(result);
                },
                error: function() {

                },
                complete: function() {
                    draw();
                }
            });
            // setTimeout(function(){
               
            // },100)
            
        },
        scratchCoupon: function() {
            alert("恭喜獲得")
        }
    },
    created: function () {
    },
    mounted: function () {
        var vm = this;
    }
});
