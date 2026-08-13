function getEvents() {

    const savedEvents = localStorage.getItem("events");

    if (savedEvents) {
        return JSON.parse(savedEvents);
    }

    localStorage.setItem(
        "events",
        JSON.stringify(initialEvents)
    );

    return initialEvents;
}


function saveEvents(events) {

    localStorage.setItem(
        "events",
        JSON.stringify(events)
    );
}


function getCurrentUser() {

    const savedUser =
        localStorage.getItem("currentUser");

    if (savedUser) {
        return JSON.parse(savedUser);
    }

    return {
        id: 0,
        name: "Guest",
        role: "guest"
    };
}


function saveCurrentUser(user) {

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );
}