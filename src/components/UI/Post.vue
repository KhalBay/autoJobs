<script setup lang="ts">
import type { PostT } from "../../models/interfaces";

const props = defineProps<{
  post: PostT
}>()
</script>

<template>
  <div class="post">
    <div class="post__author">Author: {{ props.post.userId }}</div>
    <h3 class="post__title">{{ props.post.title }}</h3>
    <h5 class="post__desc">{{ post.body }}</h5>
  </div>
</template>

<style lang="scss" scoped>
.post {
  border: 1px solid white;
  border-radius: 25px;
  cursor: pointer;

&__author {
   padding: 0 20px;
   text-align: right;
 }

&__title {
   text-decoration: underline;
   margin: 0;
 }

&__desc {
   margin: 5px;
 }
}
</style>