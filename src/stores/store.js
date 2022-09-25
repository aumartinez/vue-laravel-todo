import { defineStore } from 'pinia'
import { URL } from '@/static/global.js'
import { api } from '@/static/api.js'

export const VueStore = defineStore({
  id: 'VueStore',
  state: () => ({
    loaded: false,
    tasks: [],
    removed: [],
    newTask: '',
    success: false
  }),
  actions: {
    fetchList () {
      try {
        let resp = api.get(URL.GET_API)
        resp
        .then (res => {
          let arr = res.sort((a, b) => a.index - b.index)
          arr.forEach(e => {
            this.tasks.push(e)
          })
          this.loaded = true
        })
      } catch (error) {
        console.log(error)
      }
    },
    saveTask (data) {
      try {
        api.post(URL.POST_API, data)
        this.success = true
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