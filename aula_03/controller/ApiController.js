const users = []
const uuid = require('uuid')



class ApiController {
    static index(req, res) {
        const pessoa = users
        res.status(200).json(pessoa)
    }

    static create(req, res) {
        const { nome, idade } = req.body
        const pessoa = { id: uuid.v4(), nome, idade }
        users.push(pessoa)

        res.status(201).json("Pessoa criada")
    }

    static update(req, res) {
        const { id } = req.params
        const { nome, idade } = req.body
        const novaPessoa = { nome, idade }
        const index = users.findIndex(user => user.id === id)
        if (index < 0) {
            return res.status(404).json("user not a found")
        }
        users[index] = novaPessoa
        res.status(200).json("pessoa atualizada")
    }

    static deleteUser(req,res){
        const { id } = req.params
        const index = users.findIndex(user => user.id === id)
        if (index < 0) {
            return res.status(404).json("user not a found")
        }

        users.splice(index,1)

        res.status(200).json("pessoa deletada")
    }


}

module.exports = ApiController