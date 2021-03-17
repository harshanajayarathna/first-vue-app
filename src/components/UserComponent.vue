<template>
  <div class="">
    <h3>Select User</h3>
      <select @change="changeUser()" v-model="selectedUser" name="user" id="user">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
      <!-- <h3>{{ this.$store.state.selectedUser }}</h3> -->
  </div>
</template>

<script>

export default {
  name: 'UserComponent',
  props: {},
  data () {
    return {
      users: [{ id: '', name: 'Select a User' }],
      selectedUser: ''
    }
  },
  mounted () {
    this.axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => (
        // this.users = response.data
        this.userList(response.data)
      ))
  },
  methods: {
    userList: function (data) {
      return data.forEach((key, value) => {
        this.users.push({ id: key.id, name: key.name })
      })
    },
    changeUser: function () {
      this.$store.dispatch('SET_SELECTED_USER', this.selectedUser)
    }
  }
}
</script>
