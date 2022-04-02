let counter = { counter: 0 };
const MyComponent = {
    template: `<div class="d-grid gap-2">
    <button class="btn btn-primary" @click="counter += 1" type="button">Button</button>
    <button class="btn btn-primary" type="button">{{counter}}</button>
  </div>`,
    data() {
        return counter;
    }
}

const app = new Vue({
    el: "#app",
    components: {
        "my-component": MyComponent
    },
    data() {
        return {
            msg: "hello component"
        }
    },
})