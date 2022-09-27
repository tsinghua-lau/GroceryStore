<template>
  <div id="private-box">
    <div class="header">
      <ul>
        <li>
          菜单1
          <div class="item-child">123</div>
        </li>
        <li>菜单2</li>
        <li>菜单3</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, onBeforeMount, onMounted } from 'vue';

onMounted(() => {});

const state = reactive({});
</script>
<style lang="less" scoped>
#private-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .header {
    width: 100%;
    height: 10%;
    background: beige;
    display: flex;
    align-items: center;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      li {
        list-style: none;
        cursor: pointer;

        &:nth-of-type(1) {
          &:hover {
            > .item-child {
              height: 144px;
              top: 96px;
              left: 204px;
              transition: 0.4s;
            }
          }

          .item-child {
            background: yellow;
            position: absolute;
            left: 204px;
            // right: 0;
            top: 96px;
            margin: auto;
            width: 220px;
            height: 0;
            overflow: hidden;
            /*height: 144px;*/
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: space-evenly;
          }
        }
      }
    }
  }

  @keyframes bounce-down {
    25% {
      transform: translateY(-30px);
    }

    50%,
    100% {
      transform: translateY(0);
    }

    75% {
      transform: translateY(80px);
    }
  }
}
</style>
