const fullName = new Vue({
    el: "#fullname",
    data() {
        return {
            height: 100,
            width: 100,
            loremShow: false,
            radioValue: false,
            // text data
            html: "HTML - HyperText Markup Language",
            css: "Cascading Style Sheet",
            js: "Javascript Programming Language",

            name: '',
            surname: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            states: [
                { name: "Andijan" },
                { name: "Namangan" },
                { name: "Fergana" }
            ],
            zip: '',
            checkme: false
        }
    },
    methods: {
        getSize() {
            console.log(this.height, this.width)
        }

    },
    computed: {

    }
});