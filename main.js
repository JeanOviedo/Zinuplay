

            const app = new Vue({
                el: '#app',
                data: {
                    titulo: 'Hola vue',
                    frutas: [],
                    nuevaFruta: '',
                },
                methods: {
                    agregarFruta(fruta){
                        let newFruta = {
                            id: Date.now(), fruta, stock: 2
                        }
                        this.frutas.push(newFruta)
                        console.log(this.frutas)
                    }
                },
                beforeCreate(){
                    console.log('beforeCreate')
                },
                created () {
                    console.log('Created')
                },
                beforeMount(){
                    console.log("before")
                },
                 mounted(){
                    console.log("Mounted")
                },
                beforeUpdate(){
                    console.log("befofr euodatedd")
                },
                updated(){
                    console.log("update")
                }
                
            })