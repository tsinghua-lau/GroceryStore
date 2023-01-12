<template>
    <div :style="{height: `${contentHeight}px`}" class="content_box" @scroll="scroll">
        <!--这层div是为了把高度撑开，让滚动条出现，height值为所有数据总高-->
        <div :style="{'height': `${itemHeight*(listAll.length)}px`, 'position': 'relative'}">
            <!--可视区域里所有数据的渲染区域-->
            <div :style="{'position': 'absolute', 'top': `${top}px`}">
                <!--单条数据渲染区域-->
                <div v-for="(item,index) in showList" :key="index" class="item">
                    {{item}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "list",
    data(){
        return{
            listAll: [],  //所有数据
            showList: [],  //可视区域显示的数据
            contentHeight: 500,  //可视区域高度
            itemHeight: 30,      //每条数据所占高度
            showNum: 0,  //可是区域显示的最大条数
            top: 0, //偏移量
            scrollTop: 0,  //卷起的高度
            startIndex: 0,  //可视区域第一条数据的索引
            endIndex: 0,  //可视区域最后一条数据后面那条数据的的索引，因为后面要用slice(start,end)方法取需要的数据，但是slice规定end对应数据不包含在里面
        }
    },
    methods:{
        //构造10万条数据
        getList(){
            for(let i=0;i<100000;i++){
                this.listAll.push(`我是第${i}条数据呀`)
            }
        },
        //计算可视区域数据
        getShowList(){
            this.showNum = Math.ceil(this.contentHeight/this.itemHeight);  //可视区域最多出现的数据条数，值是小数的话往上取整，因为极端情况是第一条和最后一条都只显示一部分
            this.startIndex = Math.floor(this.scrollTop/this.itemHeight);   //可视区域第一条数据的索引
            this.endIndex = this.startIndex + this.showNum;   //可视区域最后一条数据的后面那条数据的索引
            this.showList = this.listAll.slice(this.startIndex, this.endIndex)  //可视区域显示的数据，即最后要渲染的数据。实际的数据索引是从this.startIndex到this.endIndex-1
            const offsetY = this.scrollTop - (this.scrollTop % this.itemHeight);  //在这需要获得一个可以被itemHeight整除的数来作为item的偏移量，这样随机滑动时第一条数据都是完整显示的
            this.top = offsetY;
        },
        //监听滚动事件，实时计算scrollTop
        scroll(){
            this.scrollTop = document.querySelector('.content_box').scrollTop;  //element.scrollTop方法可以获取到卷起的高度
            this.getShowList();
        }
    },
    mounted() {
        this.getList();
        this.scroll();
    }
}
</script>

<style scoped>
.content_box{
    overflow: auto;  /*只有这行代码写了，内容超出高度才会出现滚动条*/
    width: 700px;
    border: 1px solid red;
}
/*每条数据的样式*/
.item{
    height:30px;
    padding: 5px;
    color: #666;
    box-sizing: border-box;
}
</style>