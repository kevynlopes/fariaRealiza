<template>
  <div>
    Teste {{ idParams }}
  </div>
  <VideosDetalhe />
</template>

<script setup>

definePageMeta({
  layout: "exibicao",
  middleware: ["video", "auth"],
})

const route = useRoute();

const idParams = computed(() => route.params.id)

</script>

<style></style>