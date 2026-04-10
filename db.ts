import knex from 'knex'

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'joao08',
        database: 'sistema_login'
    }
})

export async function createUser(user: any){
    let exist

    if(user.email){
        exist = await db('user').where({ email: user.email }).first()
    } else {
        exist = await db('user').where({ cpf: user.cpf }).first()
    }

    if(exist){
        return false
    }

    await db('user').insert({
        user_name: user.nome,
        cpf: user.cpf || null,
        email: user.email || null,
        use_password: user.senha
    })

    return true
}

export async function findUser(data: any){
    // tenta buscar por email ou cpf dependendo do que foi digitado
    if(data.email.includes("@")){
        return await db('user')
            .where({ email: data.email, use_password: data.senha })
            .first()
    } else {
        return await db('user')
            .where({ cpf: data.email, use_password: data.senha })
            .first()
    }
}
