import { createHashHistory } from 'history'
import Api from './api'

export const api = new Api({
  host: 'http://api.tvmaze.com',
})

export const history = createHashHistory()