<template>
  <h1>About component</h1>
  <button @click="increment">Click {{count}}</button>

  <h4>{{fullName}}</h4>
  <h4>{{firstName}}</h4>
    <div v-for="book in books" :key="book">{{book}}</div>
</template>

<script>
export default {
  name: 'AboutComponent',
  props: {
    fullName: {
      type: String,
      required: true,
      default: 'None'
    },
    firstName: {
      type: String
    }
  },
  // props: ['initialCounter'],
  data () {
    return {
      count: 0,
      books: ['Book 1', 'Book 2', 'Book 3']
    }
  },
  methods: {
    increment () {
      return this.count++
    }
  }
}
</script>
