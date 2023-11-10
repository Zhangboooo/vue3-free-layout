<template>
  <section class="free-layout" :style="ground.getStyle()">
    <template v-for="(view, index) in ground.children" :key="index">
      <FreeView v-model:view="ground.children[index]"></FreeView>
    </template>
  </section>
</template>
<script setup lang="ts">

import FreeView from "./FreeView.vue";
import {Ground} from "./Ground.ts";

const ground = defineModel<Ground>('ground', {required: true})

</script>
<style scoped>
.free-layout {
  position: relative;
}
</style>