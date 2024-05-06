<script setup lang="ts">
const route = useRoute();
const count = ref(2);

const {data, refresh} = useFetch(`/api/${route.params.model}`, {
  query: {
    count: count
  },
  headers: { 'Authorization' : 'secret' },
  watch: [count]
});
</script>

<template>
  <pre>{{data}}</pre>
</template>

<style scoped>

</style>