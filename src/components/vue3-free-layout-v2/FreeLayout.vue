<template>
  <div class="free-layout-wrap">
    <section class="free-layout" :ref="el => ground.setBindDom(el)" :style="ground.style">
      <template v-for="(child, index) in ground.children" :key="index">
        <FreeContainer :container="child"></FreeContainer>
        <ViewHandler :ground="ground"></ViewHandler>
      </template>
    </section>
  </div>
</template>
<script setup lang="ts">
import {reactive} from "vue";
import {Ground} from "./Ground";
import FreeContainer from "./FreeContainer.vue";
import ViewHandler from "./ViewHandler.vue";

const props = withDefaults(defineProps<{
  initValue: Partial<Ground>
}>(), {})

const emit = defineEmits<{
  ready: [Ground]
}>()

const ground = reactive(new Ground(props.initValue))

emit('ready', ground)
</script>

<style scoped>
.free-layout-wrap{
  display: inline-block;
  position: relative;
  box-sizing: border-box;
}
</style>