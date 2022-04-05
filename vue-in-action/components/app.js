const MyComponent = {
    template: `<div class="d-grid gap-2">
                    <button class="btn btn-primary" v-on:click="childIncrement" type="button">Button</button>
                    
                </div>`,

    methods: {
        childIncrement() {
            this.$emit("increment-me")
        }
    }

}
const FormComponent = {
    template: `
    <div class="card p-3 m-2">
    <slot></slot>
    <form>
        <label for="title">{{title}}</label>
        <input type="text" id="title" class="form-control">
        <br>
        <label for="author">{{author}}</label>
        <input type="text" id="author" class="form-control">
        <br>
        <button class="btn btn-danger">Submit</button>
    </form>
</div>
`,
    props: ["title", "author"]
}

const app = new Vue({
    el: "#app",
    components: {
        "my-component": MyComponent,
        "form-component": FormComponent
    },
    data() {
        return {
            currentView: MyComponent
        }
    },
    methods: {
        cycle() {
            if (this.currentView === MyComponent) {
                this.currentView = FormComponent
            } else {
                this.currentView = MyComponent
            }
        }
    },
})