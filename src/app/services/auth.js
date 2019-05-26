import http from './_http'

const Auth = {
  signOut: () => http.post('/logout')
}

export default Auth
