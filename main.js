import Vue from 'vue';
import App from './App';
//向上通知，所有父组件
Vue.prototype.$dispatch = function (eventName, value) {
    let parent = this.$parent;
    while (parent) {
        parent.$emit(eventName, value);
        parent = parent.$parent;
    }

}

//向下通知，广播
Vue.prototype.$broadcast = function (eventName, value) {
    const broadcast = (children) => {
        children.forEach(child => {
            child.$emit(eventName, value);
            if (child.$children) {
                broadcast(child.$children)
            }
        });
    }
    broadcast(this.$children);
}

new Vue({
    el: '#app',
    render(h) {
        return h(App);
    },
})