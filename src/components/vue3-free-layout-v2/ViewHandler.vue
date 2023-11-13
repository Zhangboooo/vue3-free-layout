<template>
  <div class="size-handler-wrap" :style="viewHandler?.style">
    <div class="size-handler handler-tl"></div>
    <div class="size-handler handler-tc"></div>
    <div class="size-handler handler-tr"></div>
    <div class="size-handler handler-ml"></div>
    <div class="size-handler handler-mr"></div>
    <div class="size-handler handler-bl"></div>
    <div class="size-handler handler-bc"></div>
    <div class="size-handler handler-br"></div>
  </div>
</template>
<script setup lang="ts">
import {Ground} from "./Ground.ts";
import {nextTick, onMounted} from "vue";
import {useDraggable} from "@vueuse/core";

const {ground: {viewHandler, activeView}} = defineProps<{
  ground: Ground
}>()


onMounted(async () => {
  await nextTick()
  useDraggable(viewHandler?.bindDom, {
    initialValue: { x: viewHandler?.x || 0, y: viewHandler?.y || 0 },
    draggingElement: viewHandler?.bindDom,
    containerElement: viewHandler?.parent?.bindDom,
    exact: true,
    // preventDefault: true,
    // stopPropagation: true,
    // capture: true,
    onMove({ x, y }) {
      console.log(x, y)
      if (!activeView) return
      activeView.x = x
      activeView.y = y
    },
  })
})
</script>
<style scoped>
.size-handler-wrap{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border: 1px solid red;
  pointer-events: none;
  transition: .1s;
  z-index: 2;
}
.size-handler {
  --handler-size: 6px;
  position: absolute;
  width: var(--handler-size);
  height: var(--handler-size);
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 0;
  pointer-events: auto;
}
.size-handler.handler-tl{
  top: calc(-1/2 * var(--handler-size));
  left: calc(-1/2 * var(--handler-size));
  cursor: nw-resize;
}
.size-handler.handler-tc{
  top: calc(-1/2 * var(--handler-size));
  left: 50%;
  margin-left: -5px;
  cursor: n-resize;
}
.size-handler.handler-tr{
  top: calc(-1/2 * var(--handler-size));
  right: calc(-1/2 * var(--handler-size));
  cursor: ne-resize;
}
.size-handler.handler-ml{
  top: 50%;
  margin-top: calc(-1/2 * var(--handler-size));
  left: calc(-1/2 * var(--handler-size));
  cursor: w-resize;
}
.size-handler.handler-mr{
  top: 50%;
  margin-top: calc(-1/2 * var(--handler-size));
  right: calc(-1/2 * var(--handler-size));
  cursor: e-resize;
}
.size-handler.handler-bl{
  bottom: calc(-1/2 * var(--handler-size));
  left: calc(-1/2 * var(--handler-size));
  cursor: sw-resize;
}
.size-handler.handler-bc{
  bottom: calc(-1/2 * var(--handler-size));
  left: 50%;
  margin-left: calc(-1/2 * var(--handler-size));
  cursor: s-resize;
}
.size-handler.handler-br{
  bottom: calc(-1/2 * var(--handler-size));
  right: calc(-1/2 * var(--handler-size));
  cursor: se-resize;
}
</style>