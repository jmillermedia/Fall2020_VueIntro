// this is a variation on our module theme

const myVM = (() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        // el: "#app",
        data: {
            message: "Hello from Vue",
            anotherMessage: "Hey there, what's up?",
            removeAformat: true,
            showBioData: false,

            profs: [
                { name: "Justin", role: "coordinator", nickname: "nitsuj"},
                { name: "John", role: "prof", nickname: "super chill"},
                { name: "Joe", role: "prof", nickname: "Teddy Bear"}
            ]
        },

        // this is the 'mounted' lifecycle hook. Vue is done creating itself and has attached itself to the "app" div on the page.
        mounted: function() {
            console.log('Vue is mounted!');

            this.profs.push({name: "Jarrod", role: 'supermodel prof', nickname: 'zoolander'});
            // "this" refers to the entire Vue instance itself and will look for the property within it to apply the code.
        },

        // run a method where 
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },
            clickHeader() {
                console.log("clicked on the header!");
            },
            removeProf(target) {
                // remove the prof from the prof array
                console.log('clicked on remove prof', target.name);

                //toggle the property between true and false using a ternary statement.
                this.showBioData = this.showBioData ? false: true;
            }
        }
    }).$mount("#app") // also connectes Vue to your wrapper in HTML (same as el: "#app")
})();