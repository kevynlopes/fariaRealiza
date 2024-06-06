<script>
export default {
  data() {
    return {
      isOpen: false,
      isMobile: false
    };
  },
  mounted() {
    this.isMobile = window.innerWidth < 768;
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 768;
    }
  }
};
</script>


<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto max-md:px-4 flex justify-between items-center">
      <NuxtLink to="/">
        <img src="/assets/icons/logo.png" alt="" class="h-32 mr-4" />
      </NuxtLink>
      <div class="hidden md:flex gap-10">
        <NuxtLink to="/sobre" href="#" class="text-gray-800 hover:text-blue-500">Sobre nós</NuxtLink>
        <a href="#" class="text-gray-800 hover:text-blue-500">Projetos</a>
        <a href="#" class="text-gray-800 hover:text-blue-500">Equipe</a>
        <a href="#" class="text-gray-800 hover:text-blue-500">Marcar visita</a>
        <a href="#" class="text-gray-800 hover:text-blue-500">Área do cliente</a>
      </div>

      <div class="botao-tres-cores" @click="isOpen = !isOpen">
        <div class="barra rounded-xl"></div>
        <div class="barra rounded-xl"></div>
        <div class="barra rounded-xl"></div>
      </div>



      <div v-show="isOpen" class="absolute top-24 right-4 bg-white shadow-md rounded-lg p-4">
        <div v-if="!isMobile">
          <NuxtLink to="/login" href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Login</NuxtLink>
          <a href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Cadastre-se</a>
          <a href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Cadastre seu imóvel</a>
        </div>
        <div v-else>
          <NuxtLink to="/login" href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Login</NuxtLink>
          <a href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Cadastre-se</a>
          <a href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Sobre nós</a>
          <a href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Projetos</a>
          <a href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Equipe</a>
          <a href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Marcar visita</a>
          <a href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Área do cliente</a>
          <a href="#" class="block text-gray-800 hover:text-blue-500 mb-2">Cadastre seu imóvel</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
a {
  font-family: sans-serif;
  font-weight: bold;
}

.botao-tres-cores {
  display: flex;
  /* Organiza os elementos em coluna */
  flex-direction: column;
  width: 30px;
  /* Largura do botão */
  cursor: pointer;
}

.barra {
  height: 5px;
  /* Altura de cada barra */
  margin-bottom: 2px;
  /* Espaçamento entre as barras */
}

.barra:nth-child(1) {
  /* Primeira barra (azul escuro) */
  background-color: #0057b8;
}

.barra:nth-child(2) {
  /* Segunda barra (azul claro) */
  background-color: #00b0f0;
}

.barra:nth-child(3) {
  /* Terceira barra (amarelo) */
  background-color: #ffd700;
}
</style>