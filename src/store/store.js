import Vue from "vue";
import Vuex from "vuex";

//Vue가 Vuex라는 별도의 라이브러리를 사용하겠다
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

//Vuex안에 포함된 Store 객체를 생성하겠다
export const store = new Vuex.Store({
  //상태변수 선언
  state: {
    todoItems: storage.fetch(),
  },
  //상태변수를 변경하는 method 선언 (sync)
  mutations: {
    addTodo(state, todoText) {
      var obj = { completed: false, item: todoText };
      //JSON.stringify는 object를 json string 으로 변환
      localStorage.setItem(obj.item, JSON.stringify(obj));
      //todoItems 상태변수에 객체저장
      state.todoItems.push(obj);
    },
    removeTodo(state, payload) {
      const { todoItem, index } = payload;
      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(index, 1);
    },
    toggleTodo(state, payload) {
      //Object Destructuring Assignment
      const { todoItem, index } = payload;  
      const { item, completed } = todoItem;
      state.todoItems[index].completed = !completed;
      //localStorage에 updateItem 메서드가 없어서 removeItem하고 setItem 한다.
      localStorage.removeItem(item);
      localStorage.setItem(item, JSON.stringify(state.todoItems[index]));
    },
  },
  //서버와 통신을 담당하는 method 선언 (async)
  actions: {},
  //상태변수를 조회하는 method 선언
  getters: {},
});
