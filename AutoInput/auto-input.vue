<template>
	<div class="auto-input">
		<span>{{ value }}</span>
		<input class="my-input" ref="input" placeholder="" @input="setNum" v-model="newValue" />
	</div>
</template>

<script>
export default {
	name: 'autoinput',
    props:{
        value:{
            type:[ Number , String],
            default:'0'
        }
    },
	data() {
		return {
            newValue:this.value
        };
	},
	created() {},

	mounted() {},
    watch:{
    
        value: {
            //初始化的时候执行一次
            immediate: true,
            handler: function (oldValue, newValue) {
                this.newValue = this.value
            }
        }

    },
	methods: {
            setNum(){
                this.$emit('update:value',this.newValue)
            }
    },
	components: {},
};
</script>

<style lang="scss" scoped>
.auto-input {
   color: #333;
    padding: 0;
    min-width: 44px;
    position: relative;
    display: inline-block;
    margin-left: -2px;
    margin-right: -15px;
   text-align: center;
    span {
         display: inline-block;
    height: 100%;
    font-size: 59px;
    visibility: hidden;
    }

    .my-input {
  display: inline-block;
    position: absolute;
    left: -1px;
    top: 9px;
    width: 100%;
    height: 100%;
    // opacity: 0;
    background: transparent;
    min-width: 40px;
    padding: 1px;
    font-size: 59px !important;
    margin-top: -6px;
    font-size: 28px;
    caret-color: #426BF2;
    /* border-radius: 40px; */
    outline: none;
    border: none;
    border-style: none;
    text-align: center;
    }
}

</style>
