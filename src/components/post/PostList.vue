<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { api } from "../../api";
import type { PostT } from "../../models/interfaces";
import ListPagination from "../ListPagination.vue";

const router = useRouter()

const paginationSize = 10

const currentPage = ref(1)
const posts = ref<PostT[] | null>(null)

const postSliced = computed<PostT[]>(()=> posts.value?.slice((currentPage.value - 1) * paginationSize, currentPage.value * paginationSize))

const changePage = (num: number) => {
  currentPage.value = num
}

const goToPost = async (id: number) => {
  await router.push(`/posts/${id}`)
}

const startComponent = async () => {
  const postData = await api.post.getAll()
  posts.value = postData.data
}

onMounted(() => {
  startComponent()
})
</script>

<template>
  <div v-if="postSliced" class="list">
    <post-ui
        v-for="post in postSliced"
        :key="post.id"
        :post="post"
        @click="goToPost(post.id)"
    />
  </div>

  <list-pagination
      :list="posts"
      :current-page="currentPage"
      :page-size="paginationSize"
      @updatePage="changePage"
  />
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>