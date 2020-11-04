import api from '../api'

export const SignIn = ({ email, password }) => {
  return api.request({
    method: 'POST',
    url: '/users/authenticate',
    data: {
      email,
      password,
    },
  })
}

export const SignUp = ({ email, password, name, admin }) => {
  return api.request({
    method: 'POST',
    url: '/users',
    data: {
      name,
      email,
      password,
      admin,
    },
  })
}
