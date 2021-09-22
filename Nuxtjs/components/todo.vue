<template>
  <div>
    <div class="legend">
      <span> Double Click to mark as complete </span>
      <span>
        <span class="incomplete-box"> = </span>
      </span>
      <span>
        <span class="complete-box"> - </span>
      </span>
    </div>
    <div class="todoComponent">
      <div
        class="singleToDoComponent"
        v-bind:class="{ 'is-complete': toDoItem.completed }"
        v-for="toDoItem in allTodos"
        :key="toDoItem.id"
        @dblclick="dbclick(toDoItem)"
      >
        <p>{{ toDoItem.title }}</p>
        <span class="material-icons-outlined" @click="deleteTodo(toDoItem.id)">
          delete
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
          crossorigin: "anonymous"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["fetchData"]),

    ...mapActions(["delete"]),
    deleteTodo(id) {
      console.log("clicked");
      this.delete(id);
    },
    ...mapActions(["updateTodo"]),
    dbclick(toDoItem) {
      const updTodo = {
        id: toDoItem.id,
        title: toDoItem.title,
        completed: !toDoItem.completed
      };
      console.log(toDoItem);

      this.updateTodo(updTodo);
    }
  },

  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.todoComponent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.singleToDoComponent {
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 1rem;
  text-align: center;
}
.legend {
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1 rem;
}
.incomplete-box {
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: green;
  color: black;
}
</style>
