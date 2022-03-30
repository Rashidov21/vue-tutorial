let app = new Vue({
    el: '#app',
    data: {
        sitename: 'Vue in Actions!',
        products: "",
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
        }
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length || "";
        },
        getProducts: function() {
            let data = fetch(" https://www.googleapis.com/content/v2.1/{merchantId}/products/1")
                .then(response => {
                    response.json()
                })
                .then(products => {
                    console.log(products)

                })
            console.log(data)
        }
    }
})