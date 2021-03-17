import Repository from './Repository'
import { RepositoryFactory } from './RepositoryFactory'

const resource = 'posts'

export default {
  getAll () {
    return Repository.get(`${resource}`)
  },
  get (postId) {
    return Repository.get(`${resource}/${postId}`)
  },
  create (payload) {
    return Repository.post(`${resource}`, payload)
  },
  update (postId, payload) {
    return Repository.put(`${resource}/${postId}`, payload)
  },
  delete (postId) {
    return RepositoryFactory.delete(`${resource}/${postId}`)
  }
}
