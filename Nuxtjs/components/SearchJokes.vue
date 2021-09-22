<template>
  <div class="boxContainer">
    <form @submit.prevent="OnSubmit">
      <input
        type="text"
        v-model="filterResults"
        placeholder="Search Jokes...."
        class="searchBox"
      />
      <input type="submit" value="Search Jokes" />
      <br />
    </form>
  </div>
</template>

<script>
export default {
  props: ["jokes"],
  data() {
    return {
      filterResults: ""
    };
  },
  methods: {
    OnSubmit() {
      this.$emit("search-text", this.filterResults);
      this.filterResults = "";
    }
  }
};
</script>

<style>
.boxContainer {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
