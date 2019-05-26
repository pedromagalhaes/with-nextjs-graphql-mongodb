import http from './_http'

const Posts = {
  getPosts: () => http.get('/api/posts', null)
}

export default Posts
