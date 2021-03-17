import PostsRepository from './postsRepository'

const repositories = {
  posts: PostsRepository
  // another repository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
