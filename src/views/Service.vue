<template>
  <div class="service">
    <UserComponent/>
    <TodoComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserComponent from '@/components/UserComponent.vue'
import TodoComponent from '@/components/TodoComponent.vue'

export default {
  name: 'Service',
  components: {
    UserComponent,
    TodoComponent
  },
  data: function () {
    return {}
  }
}
</script>
