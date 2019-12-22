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

//eventBus的使用,相当于把一个vue的实例暴露到全局上
//这样所有的组件都可以通过$bus在暴露的vue实例上监听方法，以及触发监听方法
Vue.prototype.$bus = new Vue();

new Vue({
    el: '#app',
    render(h) {
        return h(App);
    },
})