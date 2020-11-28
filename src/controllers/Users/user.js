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
        return await res.status(200).send(users)
    } catch (err) {
        console.error(err)
        return {error: err}
    }
}

async function updateUsers(req, res) {
    const { id, email, password, nick, birthdate } = req.body
    try {
        users[id] = {
            id,
            email,
            password,
            nick,
            birthdate
        }
        return res.status(200).send(users[id])
    } catch(err) {
        console.log(err);
        return res.status(304)
    }
}

module.exports = {
    //
    register,
    getUsers,
    updateUsers
}