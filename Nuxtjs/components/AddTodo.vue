<template>
  <div class="addToDoItem">
    <p>Add your task into your list</p>
    <form @submit="addTask">
      <input type="text" v-model="inputText" placeholder="Add to do" />
      <input type="submit" value="Add" />
    </form>
    <br />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      inputText: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addTask(e) {
      e.preventDefault();
      this.addTodo(this.inputText);
      this.inputText = "";
    }
  }
};
</script>

<style scoped>
.addToDoItem {
  position: relative;
  left: 10px;
}
</style>
