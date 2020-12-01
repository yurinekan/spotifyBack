//CRUD user:
id = 0;
users = [];

async function registerUser(req, res) {
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

async function loginUser(req, res) {
    const { email, password } = req.body
    try {
        var userByCred = users.filter((user) => {
            return user.email == email && user.password == password;
        });
        return res.status(200).send(userByCred);
    } catch(err) {
        return res.status(404)
    }
}

module.exports = {
    //
    registerUser,
    getUsers,
    updateUsers,
    loginUser,
}