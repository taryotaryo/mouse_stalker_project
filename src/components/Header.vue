<template>
    <header>
      <div class="header-inner">
        <div class="header-home" v-on:mouseover="mouseEnter()" v-on:mouseleave="mouseLeave()">Home</div>
        <div class="header-list">
            <ul class="header-lists">
                <a><li v-on:mouseover="mouseEnter()" v-on:mouseleave="mouseLeave()">About</li></a>
                <a><li v-on:mouseover="mouseEnter()" v-on:mouseleave="mouseLeave()">Works</li></a>
                <a><li v-on:mouseover="mouseEnter()" v-on:mouseleave="mouseLeave()">Posts</li></a>
                <a><li v-on:mouseover="mouseEnter()" v-on:mouseleave="mouseLeave()">Contact</li></a>
            </ul>
        </div>
      </div>
    </header>
</template>

<script>
import { bus } from '../main.js'
export default {
  methods: {
    mouseEnter: function () {
      bus.$emit('bus-event-onNav')
    },
    mouseLeave: function () {
      bus.$emit('bus-event-offNav')
    }
  }
}
</script>

<style lang="scss">
header {
  height: 900px;
  font-weight: bold;
  font-size: 26px;

  .header-home{
    line-height: 3;
    transition: 0.3s;
    &:hover {
      transform: scale(1.5);
    }
  }

  .header-inner{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;

    .header-lists {
      list-style: none;
      display: flex;

      li {
        cursor: none;
        border-radius: 5px;
        padding: 10px;
        margin-right: 50px;
        transition: 0.3s;
          &:nth-of-type(4){
            margin-right: 0px;
          }
          &:hover {
            transform: scale(1.5);
          }
      }
    }
  }

}

</style>