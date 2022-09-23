import { defineStore } from 'pinia'
import { URL } from '@/static/global.js'
import { api } from '@/static/api.js'

export const store = defineStore({
  id: 'store',
  state: () => {

  },
  actions: () => {
    fetchList () {
      try {
        let res = api.get(URL.GET_API)
      } catch (error) {
        console.log(error)
      }
    }
  }
})