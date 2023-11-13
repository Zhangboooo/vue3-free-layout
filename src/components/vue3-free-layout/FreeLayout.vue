<template>
  <section class="free-layout" :style="ground.style" :ref="el => ground.bindDom(el)">
    <template v-for="(view, index) in ground.children" :key="index">
      <FreeView v-model:view="ground.children[index]"></FreeView>
      <ViewHandler v-model:view="ground.viewHandler"></ViewHandler>
    </template>
  </section>
</template>
<script setup lang="ts">

import FreeView from "./FreeView.vue";
import {Ground} from "./Ground.ts";
import ViewHandler from "./ViewHandler.vue";

const ground = defineModel<Ground>('ground', {required: true})

</script>
<style scoped>
.free-layout {
  position: relative;
}
</style>