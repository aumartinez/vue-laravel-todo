<script>
import { VueStore } from '@/stores/store.js'

export default {
  name: 'TodoList',
  setup() {
    const store = VueStore()
    store.fetchList()
    
    return {
      store
    }    
  },
  data() {
    return {
      tasks: {
        type: Array,
        required: false,
        value: this.store.taskList
      },
      removed: {
        type: Array,
        required: false,
        value: []
      },
      listTitle: {
        type: String,
        required: true,
        value: 'Lista de tareas'
      },
      newTask: {
        type: String,
        required: false,
        value: null
      },
      success: {
        type: String,
        required: false,
        value: null
      }
    }
  },
  methods: {
    addItem () {
      if (!this.newTask.value) {
        return
      }

      let o = {}
      o.name = this.newTask.value
      o.index = this.tasks.value.length

      this.tasks.value.push(o)
      this.newTask.value = null
    },
    deleteAll () {
      let removed = this.tasks.value.map(o => o.index)
      this.removed.value = removed
      this.tasks.value.length = 0
    },
    deleteSelected () {
      let selected = document.querySelectorAll('input:checked')
      let remove = []
      let o = {}

      selected.forEach(e => {        
        let i = e.value
        e.checked = false
        remove.push(Number(i))
        this.removed.value.push(o.index = (i))
      })

      let temp = this.tasks.value.filter( o => {
        return !remove.includes(o.index)
      })
      
      this.tasks.value = temp
    },
    saveTasks () {
      this.tasks.value.forEach(o => {        
        this.store.saveTask(o)
      })

      this.removed.value.forEach(o => {
        this.store.deleteTask(o)
      })

      this.success.value = 'Tarea guardada'
    }
  }
}
</script>

<template>
  <div class="todolist">
    <div class="container">
      <div class="row">
        <div class="offset-md-3 col-md-6 pt-5 pb-5">
          <h1 class="task-heading text-center pt-3 pb-3 mb-3">
            {{listTitle.value}}
            <span>
              <font-awesome-icon icon="fa-solid fa-clipboard" />
            </span>
          </h1>

          <div class="list-wrapper">
            <div 
            v-if="success.value"
            class="alert alert-success text-center">
              {{success.value}}
            </div>
            <div class="btns-wrapper">
              <button
              @click="deleteAll"
              class="btn bg-danger"
              type="button">
                <span>
                  Borrar todo
                </span>
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>

              <button 
              @click="deleteSelected"
              class="btn bg-warning" 
              type="button">                
                <span>
                  Borrar seleccionadas
                </span>
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
            <ul class="list-unstyled todo-container mt-3 mb-3">
              <li v-if="tasks.value.length === 0">
                <span class="text-danger">
                  <font-awesome-icon icon="fa-solid fa-xmark" />
                </span>
                <span>
                  No hay tareas en la lista
                </span>
              </li>
              <li 
              v-for="task in tasks.value"
              :key="task.index">
                <div class="form-check">
                  <input class="form-check-input" 
                  type="checkbox"
                  :value="task.index" 
                  :id="`item-${task.index}`" />                  
                  <label class="form-check-label" :for="`item-${task.index}`">
                    {{task.name}}
                  </label>
                </div>
              </li>
            </ul>
            <div class="input-group pt-3 pb-3">
              <input 
              v-model="newTask.value"
              @keyup.enter="addItem"
              type="text" 
              class="form-control" 
              placeholder="Agregua una tarea" 
              aria-label="Agregar tarea" 
              aria-describedby="button-add" />
              <button
              @click="addItem"
              class="btn btn-outline-secondary btn-primary" 
              type="button" 
              id="button-add">
                <font-awesome-icon icon="fa-solid fa-plus" />
              </button>
            </div>
            <div class="list-bottom">
              <button
              @click="saveTasks"
              class="btn bg-success" 
              type="button">
                <span>
                  Guardar
                </span>
                <font-awesome-icon icon="fa-solid fa-cloud-arrow-up" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .todolist {
    margin: 3rem 0;
  }

  .task-heading {
    background-color: #0097F4;
    color: #fff;
  }

  .todo-container {
    li {
      margin-bottom: 1rem;
      font-size: 18px;
    }
  }

  .btns-wrapper,
  .list-bottom {
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  button {
    color: #fff;
    margin-right: 1rem;

    &:hover {
      color: #fff !important;
      opacity: 0.7
    }
  }
</style>
