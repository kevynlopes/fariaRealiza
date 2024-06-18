<template>
  <div class="flex flex-col items-center p-6 md:p-12 lg:p-16 gap-8">
    <h2 class="text-6xl text-[#003DA6] font-bold">O que você procura?</h2>
    <div class="flex flex-col gap-8 bg-[#F6F6F6] p-8 md:p-10 w-full rounded-xl max-w-5xl">
      <div class="flex gap-4 flex-wrap">
        <Button
          class="bg-[#003DA6] rounded-none w-full md:w-auto hover:bg-white hover:text-[#003DA6] hover:border-[#003DA6] border-2">Compra</Button>
        <Button
          class="bg-[#003DA6] rounded-none w-full md:w-auto hover:bg-white hover:text-[#003DA6] hover:border-[#003DA6] border-2">Venda</Button>
        <Button
          class="bg-[#003DA6] rounded-none w-full md:w-auto hover:bg-white hover:text-[#003DA6] hover:border-[#003DA6] border-2">Locação</Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="text" placeholder="Categoria"
          class="border rounded-md p-2 focus:outline-none focus:ring focus:ring-[#003DA6]">
        <input type="text" placeholder="Categoria"
          class="border rounded-md p-2 focus:outline-none focus:ring focus:ring-[#003DA6]">
        <input type="text" placeholder="Categoria"
          class="border rounded-md p-2 focus:outline-none focus:ring focus:ring-[#003DA6]">
      </div>

      <div class="flex gap-8 justify-center items-center">
        <Button class="bg-[#003DA6] rounded-3xl py-3 px-6 w-full md:w-auto">Visitar Imóvel</Button>
        <Button class="rounded-3xl border-2 bg-white text-black border-[#003DA6] py-3 px-6 w-full md:w-auto">Saiba
          mais</Button>
      </div>
    </div>
  </div>
</template>

<script>
const Button = {
  props: {
    class: { type: String, default: '' },
  },
  template: `
    <button :class="['px-4 py-2 font-semibold', class]">
      <slot></slot> 
    </button>
  `,
};

export default {
  components: {
    Button,
  },
};
</script>
