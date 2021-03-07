const constraints = {
    firstname:{
        presence:true
    },
    lastname:{
        presence: true
    },
    email:{
        presence: true,
        email: true        
    },
    password:{
        presence: true,
    },
    phone:{
        presence: true,
    }
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            phone: null,
            errors:null
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password,
                phone: this.phone},constraints)
                if (this.errors) {
                                        
                }else{
                    alert("Registered success")
                }
        }
    }
})


// var mountedApp = Vue.createApp(app).mount('#app')
app.mount('#app')
