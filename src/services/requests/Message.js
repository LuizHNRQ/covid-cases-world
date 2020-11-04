import api from '../api'

export const addMessage = (data) => {
  return api.request({
    method: 'POST',
    url: '/message',
    data,
  })
}

export const findAll = () => {
  return api.request({
    method: 'GET',
    url: '/message',
  })
}
