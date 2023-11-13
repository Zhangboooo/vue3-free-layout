
<template>
  <div>
   <FreeLayout :init-value="initValue" @ready="onReady"></FreeLayout>
  </div>
</template>
<script setup lang="ts">
import {Container, FreeLayout, type Ground, type InitData, View} from "./components/vue3-free-layout-v2";
import {ref} from "vue";

const initValue: InitData = {
  width: 800,
  height: 600,
  backgroundColor: '#fff',
}
const ground = ref<Ground>()
const onReady = (g: Ground) => {
  ground.value = g
  console.log(ground)

  const view1 = new Container({
    width: 300,
    height: 300,
    backgroundColor: '#f00',
    x: 100,
    y: 100,
  })

  const view2 = new Container({
    width: 100,
    height: 100,
    backgroundColor: '#0f0',
    x: 10,
    y: 10,
  })

  view1.addChild(view2)

  const view3 = new Container({
    width: 200,
    height: 200,
    backgroundColor: '#00f',
    x: 50,
    y: 400,
  })

  ground.value?.addChild(view1)
  ground.value?.addChild(view3)
}

</script>
<style scoped>

</style>
