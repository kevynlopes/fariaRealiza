<script setup lang="ts">

const props = defineProps<{
  house: {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    iptu: string;
    cond: string;
    bedrooms: number;
    parkingSpaces: number;
    bathrooms: number;
  };
}>();
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <CardHeader>
      <img class="h-48 object-cover" :src="props.house.imageUrl" alt="" />
      <div class="flex flex-col justify-center items-center">
        <CardTitle class="text-[#535353]">{{ props.house.title }}</CardTitle>
        <CardDescription class="w-full">
          {{ props.house.description }}
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col justify-center items-center">
        <h4>Venda</h4>
        <p class="font-bold text-[#535353]">{{ props.house.price }}</p>
        <div class="flex gap-12">
          <p class="text-xs">IPTU {{ props.house.iptu }}</p>
          <p class="text-xs">COND {{ props.house.cond }}</p>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <ul class="flex gap-4">
        <li class="flex flex-col justify-center items-center">
          {{ props.house.bedrooms }} quartos
          <img class="w-6" src="/assets/icons/quarto.svg" alt="quarto" />
        </li>
        <li class="flex flex-col justify-center items-center">
          {{ props.house.parkingSpaces }} vagas
          <img class="w-6" src="/assets/icons/carro.svg" alt="carro" />
        </li>
        <li class="flex flex-col justify-center items-center">
          {{ props.house.bathrooms }} banheiros
          <img class="w-6" src="/assets/icons/banheiro.svg" alt="banheiro" />
        </li>
      </ul>
    </CardFooter>
  </div>
</template>
