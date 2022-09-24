import { defineStore } from 'pinia'
import { URL } from '@/static/global.js'
import { api } from '@/static/api.js'

export const VueStore = defineStore({
  id: 'VueStore',
  state: () => ({
    loaded: false,
    taskList: [],
    message: ''
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
        let resp = api.post(URL.POST_API, data)
        resp
        .then (res => {
          console.log(res)
        })
      } catch (error) {
        console.log(error)
      }
    },
    deleteTask(index) {
      try {
        let resp = api.delete(URL.DEL_API + index)
        resp
        .then (res => {
          console.log(res)
        })
      } catch (error) {
        console.log(error)
      }
    },
    deleteAll () {

    }
  }
})