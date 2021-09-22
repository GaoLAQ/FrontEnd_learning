<template>
  <div>
    <small> Joke Id: {{ $route.params.id }} </small>
    <p>{{ this.joking }}</p>
    <br />
    <NuxtLink to="/Jokes"> <button>Back to joke</button> </NuxtLink>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      joking: {}
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    try {
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      );
      this.joking = res.data.joke;
      console.log(joking);
      console.log(res.data.joke);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
