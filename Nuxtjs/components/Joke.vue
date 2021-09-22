<template>
  <div>
    <nuxt-link :to="'Jokes/' + id">
      <div class="jokeComponents">
        <p>{{ id }} -- {{ jokes }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["jokes", "id"]
};
</script>

<style>
.jokeComponents {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
