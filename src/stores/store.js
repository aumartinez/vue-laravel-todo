import { defineStore } from 'pinia'
import { URL } from '@/static/global.js'
import { api } from '@/static/api.js'

export const VueStore = defineStore({
  id: 'VueStore',
  state: () => ({
    taskList: [],
  }),
  actions: {
    fetchList () {
      try {
        let resp = api.get(URL.GET_API)
        resp
        .then (res => {
          let arr = res.sort((a, b) => a.index - b.index)
          arr.forEach(e => {
            this.taskList.push(e)
          })
        })
      } catch (error) {
        console.log(error)
      }
    },
    saveTask (data) {
      try {
        api.post(URL.POST_API, data)
      } catch (error) {
        console.log(error)
      }
    },
    deleteTask(index) {
      try {
        api.delete(URL.DEL_API + index)
      } catch (error) {
        console.log(error)
      }
    }
  }
})