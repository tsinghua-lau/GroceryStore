<template>
    <!--宁杭首页-->
    <div class="nh-content-box">

        <div class="content">

            <!--覆盖物-->
            <!-- <div class="cover-box">
                <div class="cover-item" style="pointer-events: none;"></div>
                <div class="cover-item"></div>
                <div class="cover-item" v-if="gisMapStatus" @click="panelItemClick( 7 )"></div>
            </div> -->

            <div class="top-box" ref="aaa">
                <div class="area-box">
                    <div :class="`area-item item-${item.value}`"
                         :style="`animation: anmiteX ${areaRunTime / 2}s cubic-bezier(0.42, 0, 0.58, 1.0) -${parseFloat(areaRunTime / 4) + (index ? index* parseFloat(areaRunTime / areaList.length) : 0)}s infinite alternate,anmiteY ${areaRunTime / 2}s cubic-bezier(0.6, 0.3, 0.3, 0.6) -${index ? index* parseFloat(areaRunTime / areaList.length) : 0}s infinite alternate,scale ${areaRunTime}s cubic-bezier(0.6, 0.3, 0.3, 0.6) -${index ? index* parseFloat(areaRunTime / areaList.length) : 0}s infinite alternate,rotates ${areaRunTime / 2}s cubic-bezier(0.42, 0, 0.58, 1.0) -${parseFloat(areaRunTime / 4) + (index ? index* parseFloat(areaRunTime / areaList.length) : 0)}s infinite ;`"
                         
                         v-for="(item,index) in areaList"
                         @click="areaItemClick( item.value )"
                         @mouseover="areaItemHover( item.value )"
                         @mouseout="areaItemOut( item.value )"
                         :key="index"></div>
                </div>
            </div>

            <!-- <div class="bottom-box">
                <div class="panel-box">
                    <div :class="`panel-item ${powerBtnActIndex.indexOf(item.value)!==-1 ? '' : 'is-disabled'} ${(item.value==5&&isHyes)?'is-disabled':''}` "
                         v-for="(item, index) in panelList"
                         @click="panelItemClick( item.value )"
                         :key="index">
                        <div class="child-box" v-if="item.child && powerBtnActIndex.indexOf(item.value)!==-1">
                            <div class="child-item"
                                 v-for="(obj,i) in item.child"
                                 @click.stop="panelItemClick( obj.value )"
                                 :key="'child'+i">
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            powerBtnActIndex: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            pathList: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            userInfo: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            gisMapStatus: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            isHyes: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            
        },
        data() {
            return {
                areaList: [ {
                            label: '物业系统',
                            value: 4,
                        },
                        {
                            label: '广播系统',
                            value: 3,
                        },
                      
                        {
                            label: '更多',
                            value: 2,
                        },{
                            label: '更多',
                            value: 2,
                        },{
                            label: '更多',
                            value: 2,
                        },{
                            label: '更多',
                            value: 2,
                        },],
                areaRunTime: 24,
                panelList: [
                    {
                        label: '服务区实时状态3D模型',
                        value: 5,
                    },
                    {
                        label: '标准化作业管理',
                        value: 3,
                    },
                    {
                        label: '感知设备',
                        value: 2,
                    },
                    {
                        label: '卡口车流检测',
                        value: 1,
                    },
                    {
                        label: '运营数据分析',
                        value: 4,
                        child: [
                            {
                                label: '客流和营收分析',
                                value: 41,
                            },
                            {
                                label: '车流分析',
                                value: 42,
                            },
                        ]
                    },
                    {
                        label: '预测系统',
                        value: 6,
                    },
                ],
            };
        },
        watch: {
            userInfo: {
                handler: function () {
                    if (!this.userInfo.organizations) {
                        return;
                    }
                    let departmentId = this.userInfo.organizations[0].departmentId;
                    let list = [
                        {
                            label: '保洁系统',
                            value: 5,
                        },
                        {
                            label: '物业系统',
                            value: 4,
                        },
                        {
                            label: '广播系统',
                            value: 3,
                        },
                        {
                            label: '智能手环',
                            value: 1,
                        },
                        {
                            label: '更多',
                            value: 2,
                        },
                    ];
                    let newList = [];

                    if (departmentId === 'ff80818159af9032015a12573ad50016'||departmentId === '402880465aac77b7015aad4226ae0069'||departmentId === '402880465aac77b7015aad4c5295007c') {
                        //隐藏保洁、智能手环
                        this.areaList = [
                      
                        {
                            label: '物业系统',
                            value: 4,
                        },
                        {
                            label: '广播系统',
                            value: 3,
                        },
                      
                        {
                            label: '更多',
                            value: 2,
                        },
                    ];;
                        return;
                    }

                    for (let i = 1; i <= list.length; i++) {
                        switch (i) {
                            case 1:
                                if (departmentId === '402880465aac77b7015aad4c5295007c') {
                                    newList.push(list[i]);
                                }
                                break;
                            case 2:
                                if (
                                    departmentId === '402880465aac77b7015aad4c5295007c' ||
                                    departmentId === '402880465aac77b7015aad4226ae0069' ||
                                    departmentId === '402880465aac77b7015aad427b70006b' ||
                                    departmentId === '402880465aac77b7015aad4253da006a' ||
                                    departmentId === '402880465aac77b7015aad429fe1006c'
                                ) {
                                    newList.push(list[i]);
                                }
                                break;
                            case 3:
                                if (
                                    departmentId === '402880465aac77b7015aad4226ae0069' ||
                                    departmentId === '402880465aac77b7015aad4c5295007c'
                                ) {
                                    newList.push(list[i]);
                                }
                                break;

                            case 4:
                                if (departmentId === '402880465aac77b7015aad4c5295007c') {
                                    newList.push(list[i]);
                                }
                                break;

                            case 5:
                                return true;
                        }
                    }

                },
                immediate: true,
            }
        },
        mounted() {
            console.log(this.$refs.aaa);
            this.$refs.aaa.style.width='100px'
        },
        methods: {

            /**
             * 顶部模块点击事件
             */
            areaItemClick(index) {
                switch (index) {
                    case 1:

                        break;
                    case 2:

                        break;
                    case 3:
                        window.open(
                            window.location.protocol +
                            "//" +
                            window.location.host +
                            "/rdo/index.html",
                            "_self"
                        );
                        break;

                    case 4:
                        this.$api.getSsoLoginUrl().then((res) => {
                            window.open(res); // 跳转
                        });
                        break;

                    case 5:

                }
            },

            /**
             * 顶部模块悬浮事件
             */
            areaItemHover() {
                var items = document.getElementsByClassName("area-item");
                for (var j = 0; j < items.length; j++) {
                    items[j].style.animationPlayState = "paused";
                }
            },

            /**
             * 顶部模块离开事件
             */
            areaItemOut() {
                var items = document.getElementsByClassName("area-item");
                for (var j = 0; j < items.length; j++) {
                    items[j].style.animationPlayState = "running";
                }
            },

            /**
             * 底部面板点击事件
             */
            panelItemClick(index) {
                //荷叶山没有3D模型
                if(index == 5 && this.isHyes){
                    return;
                }
                if (index === 4 || index === 6) {
                    return;
                }
                var path = this.pathList[index];

                if (index === 41) {
                    path = "/oda/index.html#/revenue";
                    //path = "/oda/index.html#/traffic";
                } else if (index === 42) {
                    //path = "/oda/index.html#/revenue";
                    path = "/oda/index.html#/traffic";
                }

                console.log('path1==>',path)
                if (path.substring(0, 4) == "http") {
                    console.log('path2==>',path)
                    window.open(path, "_self");
                } else {
                    console.log('path3==>location.protocol',window.location.protocol)
                    console.log('path3==>location.host',window.location.host)
                    console.log('path3==>path',path)
                    window.location.replace(path)
                    //https://zhfwq.jchc.cn/home/index.html#/homePage?selectId=ff80818159af9032015a12573ad50016%2a1
                    // window.open(
                    //     window.location.protocol +
                    //     "//" +
                    //     window.location.host +
                    //     path,
                    //     "_self"
                    // ); // 跳转
                }
            },
        },
    };
</script>

<style lang="less" scoped>
    
    .nh-content-box {
        width: 100%;
        height: 100%;
        background-position: center bottom;

        > .content {
            position: absolute;
            top: 100px;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 1363px;
            height: 769px;
            background: url("../assets/imgs/1.png") no-repeat center bottom;
            background-size: 1153px auto;

            > .cover-box {

                .cover-item {
                    position: absolute;
                    top: 65px;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 213px;
                    height: 193px;
                    background: url("../assets/imgs/1.png") no-repeat center bottom;
                    background-size: 100% auto;
                    z-index: 10;

                    &:nth-of-type(1) {

                        &:before {
                            content: ' ';
                            position: absolute;
                            width: 252px;
                            height: 49px;
                            background: url("../assets/imgs/1.png") no-repeat center bottom;
                            background-size: 100% auto;
                            left: -10px;
                            top: 10px;
                        }

                        &:after {
                            content: ' ';
                            position: absolute;
                            width: 131px;
                            height: 50px;
                            background: url("../assets/imgs/1.png") no-repeat center bottom;
                            background-size: 100% auto;
                            left: 0;
                            right: 26px;
                            bottom: -17px;
                            margin: auto;
                        }
                    }

                    &:nth-of-type( 2 ) {
                        width: 272px;
                        height: 205px;
                        background: url("../assets/imgs/1.png") no-repeat center bottom;
                        top: 354px;
                        animation: bounce-down 2s linear infinite;
                    }

                    &:nth-of-type( 3 ) {
                        width: 319px;
                        height: 139px;
                        background: url("../assets/imgs/1.png") no-repeat center bottom;
                        top: 590px;
                        cursor: pointer;

                        &:hover {
                            filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
                        }
                    }
                }
            }

            > .top-box {
                width: 100%;
                height: 345px;
                position: relative;

                > .area-box {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 747px;
                    height: 345px;

                    > .area-item {
                        width: 182px;
                        height: 191px;
                        position: absolute;
                        background: url("../assets/imgs/1.png") no-repeat center center;
                        background-size: 100% auto;
                        cursor: pointer;
                        
                        &:hover {
                            filter: drop-shadow(0 0 5px #1CE1FE);
                        }

                        &.item-1 {
                            background-image: url("../assets/imgs/1.png");
                        }

                        &.item-2 {
                            filter: sepia(50%);
                            -webkit-filter: sepia(50%);
                            background-image: url("../assets/imgs/1.png");
                        }

                        &.item-2:hover {
                            cursor: no-drop;
                        }

                        &.item-3 {
                            background-image: url("../assets/imgs/1.png");
                        }

                        &.item-4 {
                            background-image: url("../assets/imgs/1.png");
                        }

                        &.item-5 {
                            background-image: url("../assets/imgs/1.png");
                        }

                    }
                }
            }

            > .bottom-box {
                width: 100%;
                height: 191px;
                position: relative;
                margin-top: 55px;

                > .panel-box {
                    width: 100%;
                    height: 100%;
                    position: relative;

                    > .panel-item {
                        position: absolute;
                        width: 237px;
                        height: 149px;
                        background: url("../assets/imgs/1.png") no-repeat center bottom;
                        background-size: 100% auto;
                        cursor: pointer;

                        &.is-disabled {
                            cursor: no-drop;
                            filter: none !important;

                        }

                        &:hover {
                            filter: drop-shadow(0 0 5px rgba(28, 225, 254, 0.66));

                            > .child-box {
                                height: 144px;
                                top: -144px;
                                transition: 0.4s;
                            }
                        }

                        > .child-box {
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 0;
                            margin: auto;
                            width: 220px;
                            height: 0;
                            overflow: hidden;
                            /*height: 144px;*/
                            background: url("../assets/imgs/1.png") no-repeat center bottom;
                            background-size: 100% 100%;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            align-content: space-evenly;

                            > .child-item {
                                width: 209px;
                                height: 68px;
                                background: url("../assets/imgs/1.png") no-repeat center bottom;
                                background-size: auto 75px;

                                &:hover {
                                    filter: drop-shadow(0 0 5px rgba(28, 225, 254, 0.66));
                                }

                                &:nth-of-type(2) {
                                    background: url("../assets/imgs/1.png") no-repeat center bottom;
                                }
                            }
                        }

                        &:nth-of-type(1) {
                            background-image: url("../assets/imgs/1.png");
                            top: 16px;
                            left: 0;
                            transform: perspective(400px) rotateY(36deg) rotateX(10deg) rotate(-8deg);

                            &.is-disabled {
                                background-image: url("../assets/imgs/1.png");
                            }
                        }

                        &:nth-of-type(2) {
                            background-image: url("../assets/imgs/1.png");
                            top: -18px;
                            left: 197px;
                            transform: scale(0.8, 0.8) perspective(400px) rotateY(20deg) rotateX(5deg) rotate(-5deg);

                            &.is-disabled {
                                background-image: url("../assets/imgs/1.png");
                            }
                        }

                        &:nth-of-type(3) {
                            background-image: url(".../assets/imgs/1.png");
                            top: -32px;
                            left: 375px;
                            transform: scale(0.7, 0.7) perspective(400px) rotateY(10deg) rotateX(5deg) rotate(-4deg);

                            &.is-disabled {
                                background-image: url("../assets/imgs/1.png");
                            }
                        }

                        &:nth-of-type(4) {
                            background-image: url("../assets/imgs/1.png");
                            top: -32px;
                            left: 745px;
                            transform: scale(0.7, 0.7) perspective(400px) rotateY(-10deg) rotateX(5deg) rotate(4deg);

                            &.is-disabled {
                                background-image: url("../assets/imgs/1.png");
                            }
                        }

                        &:nth-of-type(5) {
                            background-image: url("../assets/imgs/1.png");
                            top: -18px;
                            left: 927px;
                            transform: scale(0.8, 0.8) perspective(400px) rotateY(-20deg) rotateX(5deg) rotate(5deg);

                            &.is-disabled {
                                background-image: url("../assets/imgs/1.png");
                            }
                        }

                        &:nth-of-type(6) {
                            background-image: url("../assets/imgs/1.png");
                            top: 16px;
                            left: 1123px;
                            transform: perspective(400px) rotateY(-36deg) rotateX(10deg) rotate(8deg);
                            &:hover{
                                filter: none;
                            }
                            &.is-disabled {
                                background-image: url("../assets/imgs/1.png");
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<style>
         @keyframes rotates {
        0% {
          transform: rotate3d(0, 1, 0, 180deg);
        }
        25% {
          transform: rotate3d(0, 1, 0, 60deg);
        }
        50% {
          transform: rotate3d(0, 1, 0, 0deg);
        }
        75% {
          transform: rotate3d(0, 1, 0, 60deg);
        }
        100% {
          transform: rotate3d(0, 1, 0, 160deg);
        }
      }
    /* 在X轴上的移动 */
    @keyframes anmiteX {
        from {
            left: -11px;
        }
        to {
            left: 576px;
        }
    }

    /* 在轴上Y的移动 */
    @keyframes anmiteY {
        from {
            top: -16px;
            z-index: 1;
        }
        to {
            top: 159px;
            z-index: 99;
        }
    }

    /* 对球进行放大和缩小在视觉上进行远近的模拟 */
    @keyframes scale {
        0% {
            transform: scale(0.7, 0.7);
            opacity: 0.75;
        }
        50% {
            transform: scale(1.1, 1.1);
            opacity: 1;
        }
        100% {
            transform: scale(0.7, 0.7);
            opacity: 0.75;
        }
    }


    @keyframes bounce-down {
        25% {
            transform: translateY(-3px);
        }

        50%,
        100% {
            transform: translateY(0);
        }

        75% {
            transform: translateY(3px);
        }
    }
</style>