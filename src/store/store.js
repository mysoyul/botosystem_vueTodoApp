import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import todo from './modules/todo';

//Vue가 Vuex라는 별도의 라이브러리를 사용하겠다
Vue.use(Vuex);

//순서가 바뀌면 않됩니다.
//Vue가 VueAxios와 axios라는 별도의 라이브러리를 사용하겠다
Vue.use(VueAxios, axios);


//Vuex안에 포함된 Store 객체를 생성하겠다
export const store = new Vuex.Store({
    modules:{
        todo
    }
});
