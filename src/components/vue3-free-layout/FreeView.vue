<template>
  <div class="free-view" :style="$view.style" :ref="(el) => $view.bindDom(el)" @click="() => $view.ground?.changeActiveView($view)">
    <template v-for="(child, index) in $view.children" :key="index">
      <FreeView v-model:view="$view.children[index]"></FreeView>
    </template>

  </div>
</template>
<script setup lang="ts">
import {View} from "./View";
import { useDraggable } from '@vueuse/core'
import {nextTick, onMounted, reactive} from "vue";

const props = defineProps<{
  view: View
}>()
const emit = defineEmits<{
  'update:view': [View]
}>()

const $view = reactive(new View(props.view))

// `style` will be a helper computed for `left: ?px; top: ?px;`
onMounted(async () => {
  await nextTick()
  useDraggable($view.bindingDom as HTMLElement, {
    initialValue: { x: props.view.x, y: props.view.y },
    draggingElement: $view.bindingDom as HTMLElement,
    containerElement: $view.parent?.bindingDom as HTMLElement,
    // exact: true,
    // preventDefault: true,
    // stopPropagation: true,
    // capture: true,
    onMove({ x, y }) {
      $view.x = x
      $view.y = y
    },
  })
})


</script>

<style scoped>
.free-view {
  position: absolute;
  --handler-size: 6px;
}
</style>