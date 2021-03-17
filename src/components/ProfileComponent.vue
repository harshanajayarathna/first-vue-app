<template>
    <div>
      <h2>Posts</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
        </tr>
      </tbody>
  </table>

    </div>
</template>

<script>
import { RepositoryFactory } from '../api/RepositoryFactory'
const PostsRepository = RepositoryFactory.get('posts')

export default {
  name: 'ProfileComponent',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const posts = await PostsRepository.getAll()
      this.userPosts(posts.data)
    },
    userPosts (fetchedPosts) {
      fetchedPosts.forEach((post) => {
        this.posts.push({ id: post.id, title: post.title })
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
