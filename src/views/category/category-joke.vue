<template>
  <div id="category">
    <b-button size="lg" @click="getCategoryRandomJoke"
      >Get random joke from {{ category }} category
    </b-button>
    <b-button @click="$router.push({ name: 'CategoriesView' })" size="lg">
      Back
    </b-button>
    <b-modal ref="my-modal" hide-header hide-footer>
      <div class="d-block text-center">
        <h3>{{ randomJoke.value }}</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
        >Close Me</b-button
      >
    </b-modal>
  </div>
</template>

<script lang="ts" src="./category-joke.component.ts">
</script>

<style scoped>
#category {
  display: grid;
  margin-right: 20%;
  margin-left: 20%;
  margin-bottom: 20px;
}
button {
  margin: 10px;
}
</style>