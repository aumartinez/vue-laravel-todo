<template>
  <div class="todolist">
    <div class="container">
      <div class="row">
        <div class="col-md-12 pt-5 pb-5">
          <h1 class="text-center">
            Lista de tareas
          </h1>

          <div class="list-wrapper">
            <ul class="todo-container">

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todolist {
    margin: 5rem 0;
  }
</style>
