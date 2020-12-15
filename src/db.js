async function connect(){

    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }

    const mysql = require('mysql');
    const connection = await mysql.createConnection('mysql://root');
    console.log("Conectou no MYSQL!");
    global.connection = connection;
    return connection;

}
connect();

async function selectUsers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * from users;')
    return rows
}

async function insertUser(user){
    const conn = await connect();
    const sql = 'INSERT INTO users(email, password, nick, birthdate) VALUES (?, ?, ?, ?);';
    const values = [user.email, user.password, user.nick, user.birthdate];
    await conn.query(sql, values)
}

async function updateUser(id, user){
    const conn = await connect();
    const sql = 'UPDATE users SET email=?, password=?, nick=?, birthdate=? WHERE id=?';
    const values = [user.email, user.password, user.nick, user.birthdate, id]
    await conn.query(sql, values)
}

async function deleteUser(id){
    const conn = await connect();
    const sql = 'DELETE FROM users where id=?;';
    return await conn.query(sql, [id]);
}

module.exports = {selectUsers, insertUser, updateUser, deleteUser}