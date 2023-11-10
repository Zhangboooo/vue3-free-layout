<template>
  <div class="free-view" :style="style" :ref="el => el && view.setDom(el as Element)"></div>
</template>
<script setup lang="ts">
import type {View} from "./View";
import { useDraggable } from '@vueuse/core'
import {computed, markRaw, nextTick, onMounted, watch} from "vue";



const view = defineModel<View>('view', {required: true})

const style = computed(view.value.getStyle.bind(view.value))

// `style` will be a helper computed for `left: ?px; top: ?px;`
onMounted(async () => {
  await nextTick()
  const { x, y } = useDraggable(view.value.dom as HTMLElement, {
    initialValue: { x: view.value.x, y: view.value.y },
  })
  watch(x, x => {
    console.log(x)
    view.value.setX(x)
  })
  watch(y, y => {
    console.log(y)
    view.value.setY(y)
  })

})

watch([() => view.value.x, () => view.value.y], ([x, y]) => {
  console.log(x, y)
})

</script>

<style scoped>
.free-view {
  position: absolute;
}
</style>