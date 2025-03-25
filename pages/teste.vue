<template>
  <main class="container mx-auto p-8">
    <!-- Usando tag semântica section para melhor estrutura HTML -->
    <section class="mb-8">
      <h1 class="text-3xl font-bold mb-4">Página de Teste</h1>
      <p class="text-gray-600">Esta é uma página de exemplo com boas práticas de SEO.</p>
    </section>

    <!-- Exemplo de conteúdo estruturado -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-3">Seção 1</h2>
        <p>Conteúdo de exemplo com estrutura semântica adequada.</p>
      </article>

      <article class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-3">Seção 2</h2>
        <p>Mais conteúdo de exemplo bem estruturado.</p>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Gender } from '@/types/enums'
import type { ICategoryDisplay } from '@/types/types'
import { Cookie } from '@/types/enums'

const { category, location } = useRoute().params
const list = resolveComponent('CategoryPageLayoutList')
const media = resolveComponent('CategoryPageLayoutMedia')

const gender = ref<Gender>()

const baseURL = useRuntimeConfig().public.api.awsGateway
const locationParam = useCookie(Cookie.LocationParam)

const { data, status } = useFetch<ICategoryDisplay>(`${baseURL}/v1/marketplace/categories/by-slug/${category}/city/${locationParam.value || location}/procedure-display`, {
  query: {
    gender_filter: gender,
  },
  headers: {
    origin: useRuntimeConfig().public.buildContent.sellerDns,
  },
  watch: [locationParam],
})

const getCategoryPage = computed(() => {
  return data.value?.type === 'media' ? media : list
})

const title = data.value?.name || 'Categorias | Saude Trevo'
const description = data.value?.description || 'Categorias | Saude Trevo'
const ogImage = data.value?.image || 'https://web-cdn.saudetrevo.com.br/images/banner_quem_somos.webp'

useHead({
  title: 'Página de Teste - Portfolio Felipe Moreira',
  meta: [
    { 
      name: 'description',
      content: 'Página de teste demonstrando boas práticas de SEO em uma aplicação Nuxt.js. Exemplo de estruturação de conteúdo e meta tags otimizadas para mecanismos de busca.'
    },
    { 
      name: 'keywords',
      content: 'teste, portfolio, desenvolvimento web, nuxt.js, vue.js'
    },
    {
      property: 'og:title',
      content: 'Página de Teste - Portfolio Felipe Moreira'
    },
    {
      property: 'og:description',
      content: 'Página de teste demonstrando boas práticas de SEO em uma aplicação Nuxt.js'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:title',
      content: 'Página de Teste - Portfolio Felipe Moreira'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://seudominio.com/teste' // Atualize com seu domínio real
    }
  ]
})

useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description,
  ogImage,
  twitterImage: ogImage,
  robots: {
    index: true,
    follow: true,
  },
  twitterCard: 'summary',
})
</script>
