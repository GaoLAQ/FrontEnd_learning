<template>
  <div>
    <h1>This is about page</h1>
    <p>This is a app display the dadjokes</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About us",
      meta: [
        {
          hid: "descirption",
          name: "descrption",
          content: "Best place for corny dad jokes"
        }
      ]
    };
  },
  data() {
    return {};
  }
};
</script>

<style></style>
