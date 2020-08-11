let greeting = name => console.log(`Hello ${name}`);

const userInfo = (firstName, lastName, callback) => {
    const fullName = `${firstName} ${lastName}`;
    callback(fullName);
}

userInfo('gordon', 'tam', greeting);