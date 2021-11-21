<template>
    <div>
        <!--ul>li*3 -->
        <ul>
            <li v-for="(todoItem, index) in this.$store.state.todoItems" :key="index" class="shadow">
                <i class="fas fa-check checkBtn" :class="{checkBtnCompleted: todoItem.completed}" 
                    @click="toggleComplete(todoItem,index)"></i>
                <span :class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" @click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        removeTodo(todoItem, index) {
          //this.$emit('removeEvent', todoItem, index);
          this.$store.commit('removeTodo', {todoItem, index});
        },
        toggleComplete(todoItem, index) {
          //this.$emit('toggleEvent', todoItem, index);
          this.$store.commit('toggleTodo', {todoItem, index});
        }
    },

}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>
