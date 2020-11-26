import { fetchdata } from "./components/DataMiner.js";

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
            profs: [],
            currentProfData: {}

        },

        // this is the 'mounted' lifecycle hook. Vue is done creating itself and has attached itself to the "app" div on the page.
        mounted: function() {
            console.log('Vue is mounted! thing a fetch for the initial data.');

            fetchdata('./includes/index.php')
                .then(data => {
                    data.forEach(prof => this.profs.push(prof));
                })
                .catch(err => error(err));
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
                console.log('clicked to show prof data', target.name);

                //toggle the property between true and false using a ternary statement.
                this.showBioData = this.showBioData ? false: true;

                // make the selected prof's data visible
                this.currentProfData = target;
            }
        }
    }).$mount("#app") // also connects Vue to your wrapper in HTML (same as el: "#app")
})();