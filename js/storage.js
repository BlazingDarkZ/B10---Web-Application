function getEvents() {
    const saved = localStorage.getItem("campusEvents");

    if (saved) {
        return JSON.parse(saved);
    }

    saveEvents(initialEvents);
    return initialEvents;
}

function saveEvents(events) {
    localStorage.setItem(
        "campusEvents",
        JSON.stringify(events)
    );
}

function getRegistrations() {
    const saved = localStorage.getItem(
        "campusRegistrations"
    );

    if (saved) {
        return JSON.parse(saved);
    }

    saveRegistrations(initialRegistrations);
    return initialRegistrations;
}

function saveRegistrations(registrations) {
    localStorage.setItem(
        "campusRegistrations",
        JSON.stringify(registrations)
    );
}

function getUsers() {
    const saved = localStorage.getItem("campusUsers");

    if (saved) {
        return JSON.parse(saved);
    }

    saveUsers(initialUsers);
    return initialUsers;
}

function saveUsers(users) {
    localStorage.setItem(
        "campusUsers",
        JSON.stringify(users)
    );
}

function getCurrentUser() {
    const saved = localStorage.getItem(
        "campusCurrentUser"
    );

    if (saved) {
        return JSON.parse(saved);
    }

    return {
        username: "guest",
        role: "guest"
    };
}

function saveCurrentUser(user) {
    localStorage.setItem(
        "campusCurrentUser",
        JSON.stringify(user)
    );
}

function logoutUser() {
    localStorage.removeItem("campusCurrentUser");
}