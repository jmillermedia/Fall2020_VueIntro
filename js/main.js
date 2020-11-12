// this is a variation on our module theme

const myVM = (() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        // el: "#app",
        data: {
            message: "Hello from Vue",
            anotherMessage: "Hey there, what's up?",

            collection: [
                { name: "Justin", role: "coordinator", nickname: "nitsuj"},
                { name: "John", role: "prof", nickname: "super chill"},
                { name: "Joe", role: "prof", nickname: "Teddy Bear"}
            ]
        }
    }).$mount("#app") // also connectes Vue to your wrapper in HTML (same as el: "#app")
})();