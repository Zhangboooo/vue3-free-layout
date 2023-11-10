
<template>
  <div>
    <FreeLayout v-model:ground="ground"></FreeLayout>
  </div>
</template>
<script setup lang="ts">
import FreeLayout from "./components/vue3-free-layout/FreeLayout.vue";
import {View} from "./components/vue3-free-layout/View.ts";
import {Ground} from "./components/vue3-free-layout/Ground.ts";

const ground = new Ground({
  backgroundColor: '#6efaff'
})

ground.addChild(new View({
  width: 100,
  height: 100,
  x: 10,
  y: 20,
  backgroundColor: '#51009f'
}))

console.log(ground)
</script>
<style scoped>

</style>
