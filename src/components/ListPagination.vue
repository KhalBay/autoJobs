<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  list: {
    type: Array,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: false,
    default: 10
  }
})

const emits = defineEmits(['updatePage'])

const paginationLength = computed(()=> props.list?.length)

const changePage = (num: number) => {
  emits('updatePage', num)
}
</script>

<template>
  <div class="pagination" v-if="paginationLength > 10">
    <div
        v-for="num in paginationLength / 10"
        :key="num"
        class="pagination__item"
        :class="{'active': num === currentPage}"
        @click="changePage(num)"
    >
      {{ num }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 20px;

  &__item {
    cursor: pointer;
    padding: 10px;
    border: 1px solid white;
    border-radius: 50px;

    &.active {
      background-color: white;
      color: #242424;
    }
  }
}
</style>