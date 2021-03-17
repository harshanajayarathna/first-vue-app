<template>
  <div class="hello">
    <h1>Demo Vue 3 Application</h1>
    <h3>To build this demo application, I've used following things;</h3>
    <ul>
      <li>Vue 3</li>
      <li>{JSON} Placeholder as an api service</li>
      <li>Vuex</li>
      <li>Axios</li>
      <li>Vue router</li>
    </ul>

    <p>Click on "User Todos" to get "Todos" according to the selected user from {JSON} Placeholder</p>
    <p>Click on "Posts" to get "posts" fron {JSON} Placeholder</p>
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem {{userName}}</h3>
    <h3>Done ToDos</h3>
    <ul>
      <li v-for="(doneTodo, index) in doneTodos" :key="index">{{doneTodo.text}}</li>
    </ul>
    <h3>User Age is {{userAge}}</h3>
    <button id="btn-age" @click="increaseAge"> + </button>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    userName () {
      return this.$store.state.username
    },
    doneTodos () {
      return this.$store.getters.doneTodos
    },
    userAge () {
      return this.$store.getters.age
    }
  },
  methods: {
    increaseAge () {
      this.$store.dispatch('SET_AGE', 2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: lower-greek;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
