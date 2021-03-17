<template>
  <!-- <div>{{ userId}}</div> -->
  <ul>
      <!-- <li v-for="(userTodo, index) in userTodos" :key="index">{{ userTodo.title }}</li> -->
  </ul>
  <h4>User Has {{userTodoCount}} Todos</h4>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>title</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(userTodo, index) in userTodos" :key="index">
            <td>{{ userTodo.id }}</td>
            <td>{{ userTodo.title }}</td>
        </tr>
    </tbody>
</table>

</template>

<script>
export default {
  name: 'TodoComponent',
  data () {
    return {
    //   selecteduser: this.$store.state.selecteduser,
      todos: []
    }
  },
  computed: {
    userId () {
      return this.$store.state.selectedUser
    },
    userTodos () {
      return this.todos.filter(todo => (todo.userId === this.userId && todo.completed === true))
    //   const mytodos = this.todos.filter(user => user.userId === this.userId)
    //   console.log(mytodos)
      //   console.log(this.todos)
    //   return mytodos
    },
    userTodoCount () {
      return this.userTodos.length
    }
  },
  watch: {
    userId: function () {
    //   console.log('NEW-ID ' + newUserId + ' OLD-ID ' + oldUserId)
      this.getTodos()
    }
  },
  methods: {
    getTodos: async function () {
      await this.axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(response => (
          this.todos = response.data
        ))
    }
  }
}
</script>
