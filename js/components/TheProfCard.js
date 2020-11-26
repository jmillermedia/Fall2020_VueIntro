export default {
        name: "TheProfCard",

        props: ['prof'],

        // data needs to be a function inside a component.

        data: function() {
            return {
                myName: this.prof.name,
                myRole: this.prof.role,
                program: "IDP"
            }
        },

        template: 
        `<li @click="logClicked">
            <img :src="'images/' + prof.avatar" :alt='prof.name + " Image"'>
                <p>Prof Name: {{prof.name}}</p> 
                    <a href="" class="remove-prof">Show {{prof.name}} Info</a>
                    <a href="" class="remove-prof">Remove {{prof.name}}</a>
        </li>`, // you can only have one root element in a Vue template.

        created: function() {
            console.log(`loaded ${this.prof.name}'s card.`);
        },

        methods: {
            logClicked() {
                console.log(`fired from inside ${this.prof.name}'s component!`);
            }
        }
}