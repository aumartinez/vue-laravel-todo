import { defineStore } from 'pinia'
import { URL } from '@/static/global.js'
import { api } from '@/static/api.js'

export const store = defineStore({
  id: 'store',
  state: () => {

  },
  actions: {
    fetchList () {
      try {
        let resp = api.get(URL.GET_API)
        resp
        .then (res => {
          console.log(res)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})