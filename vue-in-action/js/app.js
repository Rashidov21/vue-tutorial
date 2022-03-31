let app = new Vue({
    el: '#app',
    data: {
        sitename: 'Vue in Actions!',
        showProduct: true,
        order: {
            firstName: "",
            lastName: "",
            address: "",
            state: "",
            states: {
                AND: "Andijan",
                NAM: "Namangan",
                FER: "Fergana",
            },
            zip: "",
            gift: false,
            method: "Please select shipping method",
            home: "Home address for shipping",
            business: "Business address for shipping",
        },
        product: {
            id: 001,
            name: "Nike Air Max",
            price: 12200,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi, maxime soluta corporis aliquam placeat quaerat tempore est consectetur voluptatem omnis nihil, nostrum itaque distinctio aut asperiores. Dolores, totam esse?',
            itemCount: 3,
            image: "./assets/nike.jpg",
            colors: ["#F7C31D", "#B7851D", "#B785C8"]
        },
        cart: [],
        width: 15,
        height: 3
    },
    // FILTERS 
    filters: {
        formatPrice: function(price) {
            if (!parseInt(price)) {
                return ""
            }
            if (price > 99999) {
                let priceString = (price / 100).toFixed(2);
                let priceArray = priceString.split("").reverse();
                let index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.slice(index + 3, 0, ",");
                    index += 4

                }
                return "$" + priceArray.reverse().join("");
            } else {
                return "$" + (price / 100).toFixed(2);
            }

        }
    },
    // METHODS 
    methods: {
        addToCart: function() {
            this.cart.push(this.product.id)
        },
        showCheckout() {
            this.showProduct = !this.showProduct
        },
        submitForm() {

        }
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length || "";
        },
        canAddToCart: function() {
            return this.product.itemCount > this.cartItemCount;
        }
    }
})