<template>
  <div id="app">
    <vue-widget-panel title="我是标题" :top="100" :left="100">
      <div class="widget-content">
        Hello，我是内容。
      </div>
    </vue-widget-panel>
  </div>
</template>

<script>
import VueWidgetPanel from '../src';
export default {
  name: 'App',
  components: {
    VueWidgetPanel
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #f2f2f2;
  position: relative;
  height: 100%;
  .widget-content {
    min-height: 200px;
  }
}
</style>
