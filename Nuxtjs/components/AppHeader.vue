<template>
  <header class="header">
    <ul class="section-header">
      <li
        class="section-header-item"
        v-for="item in urlInfos"
        :key="item.index"
      >
        <NuxtLink :to="item.url">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      urlInfos: [
        { url: "/", title: "Home" },
        { url: "/Jokes", title: "Jokes" },
        { url: "/about", title: "About" },
        { url: "/todo", title: "Todo" }
      ]
    };
  }
};
</script>

<style>
.section-header {
}
.section-header-item {
  display: inline-block;
  padding: 10px;
}
</style>
