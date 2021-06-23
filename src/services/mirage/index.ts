import { createServer, Model, Factory } from 'miragejs'
import faker from 'faker'

type User ={
    name:string;
    email:string;
    created_at:string
}

// Partial: Significa que o usuário terá todos os ja definidos na model, porem podem ser adicionados mais infomações
export function makeServer(){
    const server = createServer({

        // Quais dados serao armazenados na "base de dados"
        models:{
            user:Model.extend<Partial<User>>({})
        },

        factories:{ // Gera dados em massa
            user:Factory.extend({
                name(i:number){
                    return `User ${i + 1}`
                },
                email(){
                    return faker.internet.email().toLowerCase();
                },
                createdAt(){
                    return faker.date.recent(10);
                },
            })
        },
        seeds(server){ // Cria dados a
            server.createList('user',10)
        },
        routes(){
            this.namespace = 'api' //  **/api/users/
            this.timing = 750 // Faz com que toda a requizição feita pelo mirage leve ate 750 milisegundos para acontecer
            this.get('/users'); //ShortHand route (documentacao do mirage)
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        }
    })

    return server;
}