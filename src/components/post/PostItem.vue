<script setup lang="ts">
import { onMounted, ref } from "vue";
import {useRoute, useRouter} from "vue-router";
import { api } from "../../api";
import type { PostT } from "../../models/interfaces";

const route = useRoute()
const router = useRouter()

const post = ref<PostT | null>(null)

const goBack = async () => {
  await router.push('/posts')
}

const startComponent = async () => {
  const postValue = await api.post.get(+route.params.id)
  post.value = postValue.data
}

onMounted(() => {
  startComponent()
})
</script>

<template>
  <button class="button" @click="goBack">Верните меня назад плисс</button>
  <post-ui v-if="post" :post="post"/>
</template>

<style lang="scss" scoped>
.button {
  margin: 0 0 40px 0;
}
</style>