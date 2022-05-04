const app = new Vue({
    el: "#task",
    data() {
        return {
            letter:null,
            letters:"qwerty".split(""),
            resultData:null
        }
    },
    methods: {
     showRightLetter(){
         if(this.letter){
             this.resultData = this.letters[this.letters.indexOf(this.letter) + 1]
         }
     } 
    },

});

const peoples = [
    {
        name:"John",
        age:35
    },
    {
        name:"Mike",
        age:23
    },
    {
        name:"Bruce",
        age:12
    },
    {
        name:"David",
        age:42
    },
]