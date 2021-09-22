<template>
  <div>
    <search-box v-on:search-text="submitText" />
    {{ jokes }}
    <joke-component
      :jokes="joke.joke"
      :id="joke.id"
      v-for="joke in jokes"
      :key="joke.id"
    />
  </div>
</template>

<script>
import SearchJokes from "../../components/SearchJokes";
import axios from "axios";
import Joke from "../../components/Joke";
export default {
  components: {
    "joke-component": Joke,
    "search-box": SearchJokes
  },
  head() {
    return {
      title: "Dad jokes",
      meta: [
        {
          hid: "descirption",
          name: "descrption",
          content: "We want to fetch API"
        }
      ]
    };
  },
  data() {
    return {
      jokes: []
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    try {
      const res = await axios.get("https://icanhazdadjoke.com/search", config);
      this.jokes = res.data.results;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async submitText(value) {
      const config = {
        headers: {
          Accept: "application/json"
        }
      };
      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${value}`,
          config
        );
        this.jokes = res.data.results;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
