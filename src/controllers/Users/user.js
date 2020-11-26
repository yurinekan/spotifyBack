//CRUD user:
id = 0;
users = [];

async function register(req, res) {
    const { email, password, nick, birthdate } = req.body
    try {
        newUser = {
            id,
            email,
            password,
            nick,
            birthdate
        }
        
        users.push(newUser)
        id++;
        return res.status(201).send(newUser)
    } catch (err) {
        console.error(err);
    }
}

async function getUsers(req, res) {
    try {
        return await res.status(201).send(users)
    } catch (err) {
        console.error(err)
        return {error: err}
    }
}

async function updateStudent(req, res) {

}


module.exports = {
    //
    register,
    getUsers
}


// id = 0;
// users = [];
// async function register(req, res) {
//     const { email, password, nick, birthdate } = req.body
//     users.push(
//         {
//             id,
//             email,
//             password,
//             nick,
//             birthdate
//         }
//         )

//     id++

//     console.log(users)
//     return users
// }

// oi = {
//     body: {
//         email: 'yurisada@a.com',
//         password: 'oioioi',
//         nick: 'Alore',
//         birthdate: Date()
//     }
// }