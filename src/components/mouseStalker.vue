<template>
  <div>
    <p id="cursor"
      v-bind:style="{
        opacity: opacityA,
        top: mouseY + 'px',
        left: mouseX + 'px',
        backgroundColor: backgroundColor
      }">
    </p>
    <div v-if="!onViewActive" id="stalker"
      v-bind:style="{
        opacity: opacityB,
        transform: 'translate('+posX+'px,'+posY+'px)'
        }">
    </div>
    <div v-else-if="onViewActive" id="stalker"
      v-bind:style="{
        zIndex: zIndex,
        opacity: opacityB,
        transform: 'translate('+posX+'px,'+posY+'px) scale(2)'
      }">
    </div>
  </div>
</template>

<script>
import { bus } from '../main.js'
export default {
  data: function () {
    return {
      mouseX: 0,
      mouseY: 0,
      posX: 0,
      posY: 0,
      opacityA: 0,
      opacityB: 0,
      backgroundColor: '#000',
      onViewActive: false,
      zIndex: 2,
    }
  },
  created: function () {
    bus.$on('bus-event-onNav', this.onNav)
    bus.$on('bus-event-offNav', this.offNav)
  },
  methods: {
    getCursorCoordinate: function (event) {
      this.mouseX = event.pageX
      this.mouseY = event.pageY
      if (this.opacityA === 0) {
        this.opacityA = 1
      }
      setTimeout(function () {
        this.posX = `${this.mouseX - 20}`
        this.posY = `${this.mouseY - 24}`
        if (this.opacityB === 0) {
          this.opacityB = 1
        }
      }.bind(this), 100)
    },
    onNav: function () {
      this.onViewActive = true
      this.zIndex = -1
      this.backgroundColor = 'transparent'
    },
    offNav: function () {
      this.onViewActive = false
      this.backgroundColor = '#000'
      this.zIndex = 2
    }
  }
}
</script>

<style>
body {
  position: relative;
  height: 900px;
  background-color: #dcdcdc;
  color: #2c3e50;
  cursor: none; /* bodyに対して設定することでページ全体でデフォルトカーソルを非表示にする*/
  text-align: center;
}

body a:hover{
  cursor: none; /*aタグホバー時のカーソルも非表示にする*/
}

#cursor{
  position: relative; /* 最初はページの左上に配置されるようにする */
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px; /* カーソルの焦点を中央に合わせる */
  z-index: 3; /*一番手前に来るように*/
  background-color: #000;
  border-radius: 50%;
  opacity: 0; /*開いた瞬間非表示*/
  transition: transform 0.1s;
}

#stalker{
  position: relative;
  width: 40px;
  height: 40px;
  z-index: 2;/*一番手前に来るように*/
  background-color: #89c997;
  border-radius: 50%;
  opacity: 0; /*開いた瞬間非表示*/
  transition: transform 0.1s;
  pointer-events: none;/*【重要】マウス直下に常にstalker要素がくるのでホバー要素が働かなくなる。noneにすることでstalkerを無視する*/
}
</style>
