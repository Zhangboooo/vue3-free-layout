<template>
  <section
      class="free-container"
      :ref="el => container.setBindDom(el)"
      :style="container.style"
      @click.stop="container.ground?.setActiveView(container)">
    <template v-for="(child, index) in container.children" :key="index">
      <FreeContainer :container="child"></FreeContainer>
    </template>
  </section>
</template>

<script setup lang="ts">
import {Container} from "./Container";
import {nextTick, onMounted} from "vue";
import {useDraggable} from "@vueuse/core";

const { container } = defineProps<{
  container: Container
}>()

</script>

<style scoped>
.free-container{
  position: absolute;
}
</style>