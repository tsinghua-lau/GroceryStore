<template>
  <div class="hello">
    <div class="list" :style="`--size:${lefts};--elWidth:${elWidth}`">
      <div
        class="item"
        ref="btn"
        v-for="item in list"
        :key="item.index"
        @click="changes(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabsa",
  props: {},
  data() {
    return {
      lefts: "0",
      elWidth: "0",
      list: [
        {
          name: "菜单1",
          index: 1,
          left: 0,
        },
        {
          name: "菜单2",
          index: 2,
          left: 40,
        },
        {
          name: "菜单3",
          index: 3,
          left: 80,
        },
      ],
    };
  },
  components: {},
  mounted() {
    console.log(1);
    this.lefts = "10px";
    this.elWidth = this.$refs.btn[0].offsetWidth + "px";
  },
  methods: {
    changes(item) {
      const arr = [1, 3, 5, 7, 9];

      let index = item.index;
      let width = 0;
      if (index == 1) {
        width = 0;
        this.elWidth = this.$refs.btn[0].offsetWidth + "px";
      } else {
        for (let k = 0; k < index - 1; k++) {
          width += this.$refs.btn[k].offsetWidth;
          this.elWidth = this.$refs.btn[index - 1].offsetWidth + "px";
        }
      }

      console.log(width);

      this.lefts = width + arr[index - 1] * 10 + "px";
    },
    getJGArr(index) {
      let str = 0;
      if (index === 0) {
        return 1;
      } else {
        for (let i = 0; i < index; i++) {
          if (index - 1 === i) {
            return str;
            break;
          }
          str += 2;
          this.getJGArr(index++);
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 800px;
  height: 300px;
  border: 1px solid red;
  .list {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;

    .item {
      width: fit-content;
      height: 100%;
      text-align: center;
      position: relative;
      z-index: 10;
      cursor: pointer;
      margin: 10px;
      padding: 0 10px;
    }
    &::after {
      transition: all 0.3s;
      content: " ";
      position: absolute;
      left: var(--size);
      top: 10px;
      width: var(--elWidth);
      height: 40px;
      background: #41b883;
      z-index: -1px;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
