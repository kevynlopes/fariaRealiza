<script setup lang="ts">

// No arquivo script do Carousel.vue
interface House {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  iptu: string;
  cond: string;
  bedrooms: number;
  parkingSpaces: number;
  bathrooms: number;
}

const houses: House[] = [
  {
    id: 1,
    imageUrl: 'https://media.discordapp.net/attachments/1078398377491959940/1248431236381413451/casaCards.png?ex=6663a3b1&is=66625231&hm=2f3b1332b4ea5f21836a18ed18083f7cb52e1c9ca17d50f756c273112ed80677&=&format=webp&quality=lossless',
    title: 'Casa Moderna 1',
    description: 'Descrição da casa 1...',
    price: 'R$ 150,00',
    iptu: 'R$ 60,00',
    cond: 'R$ 60,00',
    bedrooms: 1,
    parkingSpaces: 1,
    bathrooms: 1
  },
  {
    id: 2,
    imageUrl: 'https://media.discordapp.net/attachments/1078398377491959940/1248431236381413451/casaCards.png?ex=6663a3b1&is=66625231&hm=2f3b1332b4ea5f21836a18ed18083f7cb52e1c9ca17d50f756c273112ed80677&=&format=webp&quality=lossless',
    title: 'Casa Moderna 2',
    description: 'Descrição da casa 2...',
    price: 'R$ 150,00',
    iptu: 'R$ 60,00',
    cond: 'R$ 60,00',
    bedrooms: 1,
    parkingSpaces: 1,
    bathrooms: 1
  },
  {
    id: 2,
    imageUrl: 'https://media.discordapp.net/attachments/1078398377491959940/1248431236381413451/casaCards.png?ex=6663a3b1&is=66625231&hm=2f3b1332b4ea5f21836a18ed18083f7cb52e1c9ca17d50f756c273112ed80677&=&format=webp&quality=lossless',
    title: 'Casa Moderna 2',
    description: 'Descrição da casa 2...',
    price: 'R$ 150,00',
    iptu: 'R$ 60,00',
    cond: 'R$ 60,00',
    bedrooms: 1,
    parkingSpaces: 1,
    bathrooms: 1
  },
  {
    id: 2,
    imageUrl: 'https://media.discordapp.net/attachments/1078398377491959940/1248431236381413451/casaCards.png?ex=6663a3b1&is=66625231&hm=2f3b1332b4ea5f21836a18ed18083f7cb52e1c9ca17d50f756c273112ed80677&=&format=webp&quality=lossless',
    title: 'Casa Moderna 2',
    description: 'Descrição da casa 2...',
    price: 'R$ 150,00',
    iptu: 'R$ 60,00',
    cond: 'R$ 60,00',
    bedrooms: 1,
    parkingSpaces: 1,
    bathrooms: 1
  },
  {
    id: 2,
    imageUrl: 'https://media.discordapp.net/attachments/1078398377491959940/1248431236381413451/casaCards.png?ex=6663a3b1&is=66625231&hm=2f3b1332b4ea5f21836a18ed18083f7cb52e1c9ca17d50f756c273112ed80677&=&format=webp&quality=lossless',
    title: 'Casa Moderna 2',
    description: 'Descrição da casa 2...',
    price: 'R$ 150,00',
    iptu: 'R$ 60,00',
    cond: 'R$ 60,00',
    bedrooms: 1,
    parkingSpaces: 1,
    bathrooms: 1
  },
  {
    id: 2,
    imageUrl: 'https://media.discordapp.net/attachments/1078398377491959940/1248431236381413451/casaCards.png?ex=6663a3b1&is=66625231&hm=2f3b1332b4ea5f21836a18ed18083f7cb52e1c9ca17d50f756c273112ed80677&=&format=webp&quality=lossless',
    title: 'Casa Moderna 2',
    description: 'Descrição da casa 2...',
    price: 'R$ 150,00',
    iptu: 'R$ 60,00',
    cond: 'R$ 60,00',
    bedrooms: 1,
    parkingSpaces: 1,
    bathrooms: 1
  },
  {
    id: 2,
    imageUrl: 'https://media.discordapp.net/attachments/1078398377491959940/1248431236381413451/casaCards.png?ex=6663a3b1&is=66625231&hm=2f3b1332b4ea5f21836a18ed18083f7cb52e1c9ca17d50f756c273112ed80677&=&format=webp&quality=lossless',
    title: 'Casa Moderna 2',
    description: 'Descrição da casa 2...',
    price: 'R$ 150,00',
    iptu: 'R$ 60,00',
    cond: 'R$ 60,00',
    bedrooms: 1,
    parkingSpaces: 1,
    bathrooms: 1
  },
  {
    id: 2,
    imageUrl: 'https://media.discordapp.net/attachments/1078398377491959940/1248431236381413451/casaCards.png?ex=6663a3b1&is=66625231&hm=2f3b1332b4ea5f21836a18ed18083f7cb52e1c9ca17d50f756c273112ed80677&=&format=webp&quality=lossless',
    title: 'Casa Moderna 2',
    description: 'Descrição da casa 2...',
    price: 'R$ 150,00',
    iptu: 'R$ 60,00',
    cond: 'R$ 60,00',
    bedrooms: 1,
    parkingSpaces: 1,
    bathrooms: 1
  },
  {
    id: 2,
    imageUrl: 'https://media.discordapp.net/attachments/1078398377491959940/1248431236381413451/casaCards.png?ex=6663a3b1&is=66625231&hm=2f3b1332b4ea5f21836a18ed18083f7cb52e1c9ca17d50f756c273112ed80677&=&format=webp&quality=lossless',
    title: 'Casa Moderna 2',
    description: 'Descrição da casa 2...',
    price: 'R$ 150,00',
    iptu: 'R$ 60,00',
    cond: 'R$ 60,00',
    bedrooms: 1,
    parkingSpaces: 1,
    bathrooms: 1
  },
];

</script>

<template>
  <div class="flex flex-col gap-8 pb-10 md:mx-24">
    <h3 class="text-4xl text-[#003DA6] font-bold max-md:text-center">Imóveis para venda<span
        class="text-gray-950">.</span>
    </h3>
    <div class="w-full">
      <Carousel>
        <CarouselContent>
          <CarouselItem v-for="house in houses" :key="house.id" class="flex-none">
            <div class="p-1">
              <Card>
                <CardContent>
                  <SectionHouses :house="house" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <!-- <CarouselPrevious />
      <CarouselNext /> -->
      </Carousel>
    </div>
    <div class="flex justify-center">
      <Button class="rounded-3xl border-2 bg-white text-black border-[#003DA6] py-3 px-6 md:w-auto">Saiba
        mais</Button>
    </div>
  </div>
</template>


<style scoped>
.carousel-content {
  overflow-x: hidden;
  /* Impede o conteúdo de transbordar horizontalmente */
}
</style>
