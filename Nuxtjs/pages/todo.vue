<template>
  <div class="todos">
    <div class="todo">
      <add-to-do />
      <filter-to-do />
      <to-do />
    </div>
  </div>
</template>

<script>
import todo from "../components/todo";
import AddTodo from "../components/AddTodo";
import FilterTodo from "../components/FilterTodo";
export default {
  components: {
    "to-do": todo,
    "add-to-do": AddTodo,
    "filter-to-do": FilterTodo
  }
};
</script>

<style scoped></style>
