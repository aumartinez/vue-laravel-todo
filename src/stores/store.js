import { defineStore } from 'pinia'
import { URL } from '@/static/global.js'
import { api } from '@/static/api.js'

export const VueStore = defineStore({
  id: 'VueStore',
  state: () => ({
    taskList: []
  }),
  actions: {
    fetchList () {
      try {
        let resp = api.get(URL.GET_API)
        resp
        .then (res => {
          let arr = res.sort((a, b) => a.index - b.index)
          arr.forEach(e => {
            this.taskList.push(e.name)
          })
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})