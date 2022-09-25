<script setup>
import { onMounted } from 'vue';
import { VueStore } from '@/stores/store.js'

const store = VueStore()

function deleteAll () {
  let removed = store.tasks.map(o => o.index)
  store.removed = removed
  store.tasks.length = 0
}

function addItem() {
  if (!store.newTask) {
    return
  }

  let o = {}
  o.name = store.newTask
  o.index = store.tasks.length

  store.tasks.push(o)
  store.newTask = null
}

function deleteSelected () {
  let selected = document.querySelectorAll('input:checked')
  let remove = []
  let o = {}

  selected.forEach(e => {        
    let i = e.value
    e.checked = false
    remove.push(Number(i))
    store.removed.push(o.index = (i))
  })

  let temp = store.tasks.filter( o => {
    return !remove.includes(o.index)
  })
  
  store.tasks = temp
}

function saveTasks () {
  store.tasks.forEach(o => {        
    store.saveTask(o)
  })

  store.removed.forEach(o => {
    store.deleteTask(o)
  })

  this.success = 'Tarea guardada'
}

onMounted(() => {
  store.fetchList()
})
</script>


<template>
  <div class="todolist">
    <div class="container">
      <div class="row">
        <div class="offset-md-3 col-md-6 pt-5 pb-5">
          <h1 class="task-heading text-center pt-3 pb-3 mb-3">
            Lista de tareas
            <span>
              <font-awesome-icon icon="fa-solid fa-clipboard" />
            </span>
          </h1>

          <div class="list-wrapper">
            <div 
            v-if="store.success"
            class="alert alert-success text-center">
              Tarea guardada
            </div>
            <div class="btns-wrapper">
              <button
              @click="deleteAll()"
              class="btn bg-danger"
              type="button">
                <span>
                  Borrar todo
                </span>
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>

              <button 
              @click="deleteSelected()"
              class="btn bg-warning" 
              type="button">                
                <span>
                  Borrar seleccionadas
                </span>
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
            <ul class="list-unstyled todo-container mt-3 mb-3">
              <li v-if="!store.loaded">
                <span>
                  Cargando tareas de la API ...
                </span>
              </li>
              <li v-if="store.tasks.length === 0 && store.loaded">
                <span class="text-danger">
                  <font-awesome-icon icon="fa-solid fa-xmark" />
                </span>
                <span>
                  No hay tareas en la lista
                </span>
              </li>
              <li 
              v-for="task in store.tasks"
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
              v-model="store.newTask"
              @keyup.enter="addItem"
              type="text" 
              class="form-control" 
              placeholder="Agregua una tarea" 
              aria-label="Agregar tarea" 
              aria-describedby="button-add" />
              <button
              @click="addItem()"
              class="btn btn-outline-secondary btn-primary" 
              type="button" 
              id="button-add">
                <font-awesome-icon icon="fa-solid fa-plus" />
              </button>
            </div>
            <div class="list-bottom">
              <button
              @click="saveTasks()"
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
