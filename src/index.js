(async () => {
    const db = require('./db');
    console.log('Iniciado');

    console.log('INSERT INTO USERS');
    const result = await db.insertUser({email: 'girino@gmail.com', password: '1234567', nick: 'girino', birthdate: '01/01/2000'});
    console.log(result);

    console.log('SELECT * FROM USERS');
    const users = await db.selectUsers();
    console.log(users)

    console.log('UPDATE USER');
    const result2 = await db.updateUser(6, {email: 'girino123@gmail.com', password: '123455', nick: 'girino123', birthdate: '01/01/2001'});
    console.log(result2)

    console.log('DELETE FROM USERS');
    const result3 = await db.deleteUser(6);
    console.log(result3)
})