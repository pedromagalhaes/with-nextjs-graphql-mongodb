/* eslint-disable no-console */
import fetch from '../utils/fetch'

const isBrowser = typeof window !== 'undefined'
const HOST = `http://localhost:${process.env.PORT}`

const initFetch = fetch({
  baseURL: isBrowser ? window.location.origin : HOST,
  timeout: 60000
})

export const api = initFetch

export default {
  get: async (url, params, headers = null) => api.get(url, params, { headers }),
  del: async url => api.delete(url, null),
  put: async (url, body) => api.put(url, body),
  post: async (url, body, headers = null) => api.post(url, body, { headers })
}
