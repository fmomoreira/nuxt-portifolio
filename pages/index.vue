<template>
  <div class="container mx-auto p-8">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <!-- Lado esquerdo - Foto e nome -->
      <div class="w-full md:w-1/3 text-center">
        <div class="rounded-lg overflow-hidden shadow-lg mb-4">
          <img
            src="/img/profile.webp"
            alt="Felipe Moreira"
            class="w-full object-cover"
          />
        </div>
        <h1 class="text-3xl font-bold text-gray-800">Felipe Moreira</h1>
      </div>

      <!-- Lado direito - Resumo -->
      <div class="w-full md:w-2/3">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Desenvolvedor Full Stack</h2>
        <p class="text-gray-600 leading-relaxed">
          Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. 
          Com experiência em desenvolvimento web full stack, trabalho com as mais recentes 
          tecnologias do mercado, incluindo Vue.js, Nuxt, Node.js e muito mais. 
          Meu objetivo é desenvolver aplicações que não apenas funcionem perfeitamente, 
          mas também proporcionem uma excelente experiência ao usuário.
          
          Estou sempre em busca de novos desafios e oportunidades para aprender e crescer 
          profissionalmente. Acredito que a tecnologia tem o poder de transformar o mundo 
          e estou comprometido em fazer parte dessa transformação.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Configuração do SEO para a página inicial
useHead({
  title: 'Felipe Moreira - Portfolio',
  meta: [
    { 
      name: 'description', 
      content: 'Portfolio profissional de Felipe Moreira - Desenvolvedor Full Stack especializado em Vue.js, Nuxt e tecnologias modernas'
    }
  ]
})
</script>
