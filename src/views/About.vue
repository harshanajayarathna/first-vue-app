<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutComponent :fullName="fullName" firstName="Ruchira"/>

    <input type="text" v-model="lastName" @keyup="createFullName">
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'About',
  components: {
    AboutComponent
  },
  data: function () {
    return {
      firstName: 'Harshana',
      lastName: 'jayarathna'
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    createFullName: function () {
      console.log(this.lastName)
    }
  }
}
</script>
