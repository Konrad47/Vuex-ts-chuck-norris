<template>
  <div>
    <b-col lg="4" class="pb-2"
      ><b-button size="lg"
        >Get random joke from {{ $route.params.category }} category
      </b-button></b-col
    >
    <b-col lg="4" class="pb-2"
      ><b-button @click="$router.push({ name: 'CategoriesView' })" size="lg">
        Back
      </b-button></b-col
    >
  </div>
</template>

<script>
</script>

<style lang="ts" src="./category-joke.component.ts">
</style>