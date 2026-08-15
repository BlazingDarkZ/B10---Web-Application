function login(username, password) {
    const users = getUsers();

    const user = users.find(function (account) {
        return (
            account.username === username &&
            account.password === password
        );
    });

    if (!user) {
        return false;
    }

    saveCurrentUser({
        username: user.username,
        role: user.role
    });

    return true;
}

function registerStudent(username, password) {
    const users = getUsers();

    const exists = users.some(function (user) {
        return (
            user.username.toLowerCase() ===
            username.toLowerCase()
        );
    });

    if (exists) {
        return false;
    }

    users.push({
        username: username,
        password: password,
        role: "student"
    });

    saveUsers(users);

    return true;
}