const express = require ("express")
const router= express.Router()

const app = express()
const porta = 3333
const mulheres =[{
    nome:"Lorena Antonele",
    imagem: "https://i.pinimg.com/originals/a0/97/08/a09708ebe0bdbc8332f5bce248368fa1.jpg",
    minibio: " Estudante de programação backend na Programaria",
},

   {
    nome: 'Simara Conceição',

   imagem: 'https://bit.ly/3LJIyOF',

   minibio: 'Desenvolvedora e instrutora',

 },

 {

   nome: 'Iana Chan',

   imagem: 'https://bit.ly/3JCXBqP',

   minibio: 'CEO & Founder da PrograMaria',

 },

 {

   nome: 'Luana Pimentel',

   imagem: 'https://bit.ly/3FKpFaz',

   minibio: 'Senior Staff Software Engineer',

 }

]






function mostraMulheres(resquest, response) {
    response.json(mulheres)
}

 function mostraPorta(){
    console.log("Servidor criado e rodando na porta", porta)
 }

 app.use(router.get('/mulheres', mostraMulheres))
 app.listen(porta, mostraPorta)