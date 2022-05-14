<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "KButton",
});
</script>
<script setup lang="ts">
defineProps<{
    msg: string;
}>();
</script>

<template>
    <div>{{ msg }}</div>
</template>

<style scoped></style>
