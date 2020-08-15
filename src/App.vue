<template>
  <div id="app" v-on:mousemove="callChildMethod()">
    <Mausestalker ref="child"></Mausestalker>
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Mausestalker from './components/mouseStalker.vue'

export default {
  name: 'App',
  components: {
    Header,
    Mausestalker
  },
  methods: {
    callChildMethod () {
      this.$refs.child.getCursorCoordinate(event)
    }
  }
}
</script>
