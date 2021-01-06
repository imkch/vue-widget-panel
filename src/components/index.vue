<template>
  <div class="widget-panel" ref="widgetPanel" v-drag="true" :style="panelStyle">
    <div class="widget-panel-header">
      <span class="title">{{ title }}</span>
      <i class="iconfont icon-close" @click="handleClosePanel" />
    </div>
    <div class="widget-panel-content" @mousedown="handleContentMousedown">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import '../styles/iconfont/iconfont.css';
export default {
  name: 'WidgetPanel',
  props: {
    title: {
      type: String,
      default: ''
    },
    top: {
      type: Number
    },
    left: {
      type: Number
    },
    bottom: {
      type: Number
    },
    right: {
      type: Number
    }
  },
  computed: {
    panelStyle() {
      const { top, bottom, left, right } = this;
      return {
        top: top ? top + 'px' : '',
        bottom: bottom ? bottom + 'px' : '',
        left: left ? left + 'px' : '',
        right: right ? right + 'px' : ''
      };
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClosePanel() {
      this.$el.parentElement.removeChild(this.$el);
      this.$destroy();
    },
    handleContentMousedown(e) {
      e.stopPropagation();
    }
  },
  directives: {
    drag: {
      inserted: (el, { value, modifiers }) => {
        el.onmousedown = e => {
          const mx = e.offsetX;
          const my = e.offsetY;
          const offsetX = el.offsetLeft;
          const offsetY = el.offsetTop;
          const parentX = e.clientX - mx - offsetX;
          const parentY = e.clientY - my - offsetY;
          e.preventDefault();
          document.onmousemove = e => {
            el.style.bottom = 'auto';
            el.style.right = 'auto';
            const cx = e.clientX - mx - parentX;
            const cy = e.clientY - my - parentY;
            const maxX = el.offsetParent.clientWidth - el.clientWidth;
            const maxY = el.offsetParent.clientHeight - el.clientHeight;
            // 获取范围内panel的位置
            const calcPosition = (x, y, maxX, maxY) => {
              if (x < 0) x = 0;
              if (x > maxX) x = maxX;
              if (y < 0) y = 0;
              if (y > maxY) y = maxY;
              return { x, y };
            }
            const { x, y } = calcPosition(cx, cy, maxX, maxY);
            if (!value) {
              return;
            }
            if (modifiers.x) {
              el.style.left = x + 'px';
            }
            if (modifiers.y) {
              el.style.top = y + 'px';
            }
            if (!(modifiers.x && !modifiers.y) && value) {
              el.style.left = x + 'px';
              el.style.top = y + 'px';
            }
          };
          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.widget-panel {
  position: absolute;
  z-index: 99;
  width: auto;
  height: auto;
  border-radius: 4px;
  pointer-events: auto;
  box-shadow: 0 6px 14px 0 rgba(0,0,0,.06);
  overflow: hidden;
  i {
    cursor: pointer;
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    background: #404040;
    color: #fff;
    .title {
      font-weight: bold;
    }
    &:hover {
      cursor: move;
    }
  }
  &-content {
    width: auto;
    height: auto;
    min-width: 300px;
    min-height: auto;
    overflow: auto;
    padding: 8px;
  }
}
</style>
