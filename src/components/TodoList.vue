<template>
  <div class="todolist">
    <div class="container">
      <div class="row">
        <div class="offset-md-3 col-md-6 pt-5 pb-5">
          <h1 class="text-center">
            {{listTitle.value}}
            <span>
              <font-awesome-icon icon="fa-solid fa-clipboard" />
            </span>
          </h1>

          <div class="list-wrapper">
            <div class="btns-wrapper">
              <button class="btn bg-danger" type="button">
                <span>
                  Borrar todo
                </span>
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>

              <button class="btn bg-warning" type="button">
                <span>
                  Borrar seleccionadas
                </span>
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
            <ul class="list-unstyled todo-container">
              <li 
              v-for="(task, index) in tasks.value"
              :key="index">
                <div class="form-check">
                  <input class="form-check-input" 
                  type="checkbox" 
                  value="" 
                  :id="`item-${index}`" />                  
                  <label class="form-check-label" :for="`item-${index}`">
                    {{task}}
                  </label>
                </div>
              </li>
            </ul>
            <div class="input-group pt-3 pb-3">
              <input type="text" 
              class="form-control" 
              placeholder="Agregua una tarea" 
              aria-label="Agregar tarea" 
              aria-describedby="button-add" />
              <button 
              class="btn btn-outline-secondary btn-primary" 
              type="button" 
              id="button-add">
                <font-awesome-icon icon="fa-solid fa-plus" />
              </button>
            </div>
            <div class="list-bottom">
              <button class="btn bg-success" type="button">
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

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      tasks: {
        type: Array,
        required: false,
        value: [1, 2, 3]
      },
      listTitle: {
        type: String,
        required: true,
        value: 'Lista de tareas'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todolist {
    margin: 5rem 0;
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
  }
</style>
