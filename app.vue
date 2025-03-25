<template>
  <div>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Felipe Moreira</NuxtLink>
        <NuxtLink to="/sobre" class="hover:text-gray-300">Sobre Mim</NuxtLink>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
// Configuração global do head
useHead({
  titleTemplate: '%s - Portfolio',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  @apply bg-gray-50;
}
</style>
