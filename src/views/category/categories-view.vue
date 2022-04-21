<template>
  <div id="categories">
    <b-list-group v-for="(category, i) in getCategories" :key="i">
      <router-link
        :to="{
          name: 'CategoryJoke',
          params: { category: getCategories[i] },
        }"
      >
        <b-list-group-item button>
          {{ category }}
        </b-list-group-item>
      </router-link>
    </b-list-group>
  </div>
</template>

<script lang="ts" src="./categories.component.ts">
</script>

<style scoped>
#categories {
  margin-right: 10%;
  margin-left: 10%;
  padding-bottom: 20px;
}
a {
  text-decoration: none;
}
</style>