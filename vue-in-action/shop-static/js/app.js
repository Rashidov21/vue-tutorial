let plusApp = new Vue({
    el: '#tasks',
    data() {
        return {
            text: '',

        }
    },
    methods: {
        checkLetter() {
            let lastElem = this.text[this.text.length - 1]
            if (lastElem == 'x') {
                this.text = ''
            } else if (lastElem == 'y') {
                this.text = ''

            } else if (lastElem == 'z') {
                this.text = ''

            } else {
                console.log("STOP")
            }

        }
    }
})


// let app = new Vue({
//     el: '#app',
//     data: {
//         sitename: 'Vue in Actions!',
//         showProduct: true,
//         products: [{
//                 id: 1,
//                 name: "Nike Predator Star",
//                 price: 180200,
//                 description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi, maxime soluta corporis aliquam placeat quaerat tempore est consectetur voluptatem omnis nihil, nostrum itaque distinctio aut asperiores. Dolores, totam esse?",
//                 itemCount: 15,
//                 image: "./assets/nike2.jpg",
//                 colors: ["#F7C31D", "#B7851D", "#B785C8"],
//                 rating: 3
//             },
//             {
//                 id: 2,
//                 name: "Nike Mercurial",
//                 price: 160200,
//                 description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi, maxime soluta corporis aliquam placeat quaerat tempore est consectetur voluptatem omnis nihil, nostrum itaque distinctio aut asperiores. Dolores, totam esse?",
//                 itemCount: 15,
//                 image: "./assets/nike3.jpg",
//                 colors: ["#F7C31D", "#B7851D", "#B785C8"],
//                 rating: 4
//             },
//             {
//                 id: 3,
//                 name: "Nike Star Meme",
//                 price: 123200,
//                 description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi, maxime soluta corporis aliquam placeat quaerat tempore est consectetur voluptatem omnis nihil, nostrum itaque distinctio aut asperiores. Dolores, totam esse?",
//                 itemCount: 15,
//                 image: "./assets/nike.jpg",
//                 colors: ["#F7C31D", "#B7851D", "#B785C8"],
//                 rating: 5
//             },

//         ],
//         order: {
//             firstName: "",
//             lastName: "",
//             address: "",
//             state: "",
//             states: {
//                 AND: "Andijan",
//                 NAM: "Namangan",
//                 FER: "Fergana",
//             },
//             zip: "",
//             gift: false,
//             method: "Please select shipping method",
//             home: "Home address for shipping",
//             business: "Business address for shipping",
//         },

//         cart: [],

//     },

//     // FILTERS 
//     filters: {
//         formatPrice: function(price) {
//             if (!parseInt(price)) {
//                 return ""
//             }
//             if (price > 99999) {
//                 let priceString = (price / 100).toFixed(2);
//                 let priceArray = priceString.split("").reverse();
//                 let index = 3;
//                 while (priceArray.length > index + 3) {
//                     priceArray.slice(index + 3, 0, ",");
//                     index += 4

//                 }
//                 return "$" + priceArray.reverse().join("");
//             } else {
//                 return "$" + (price / 100).toFixed(2);
//             }

//         }
//     },

//     // METHODS 
//     methods: {
//         addToCart: function(item) {

//             this.cart.push(item.id)
//         },
//         showCheckout() {
//             this.showProduct = !this.showProduct
//         },
//         submitForm() {

//         },
//         checkRating(n, myProduct) {
//             return myProduct.rating - n >= 0;
//         },
//         canAddToCart: function(aProduct) {
//             return aProduct.itemCount > this.cartCount(aProduct.id);
//         },
//         cartCount(id) {
//             let count = 0;
//             for (let i = 0; i < this.cart.length; i++) {
//                 if (this.cart[i] == id) {
//                     count++
//                 }
//             }
//             return count
//         }

//     },
//     computed: {
//         cartItemCount: function() {
//             return this.cart.length || "";
//         },

//     },

// })