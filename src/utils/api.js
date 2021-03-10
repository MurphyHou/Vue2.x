import {
  get,
  post,
} from './request.js'

export const API = {
  testApi: params => post('/vitality/runForest/getJwtToken.action', params)
}
