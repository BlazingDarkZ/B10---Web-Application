function canManageEvent(event, user) {

    if (user.role === "admin") {
        return true;
    }


    if (
        user.role === "student" &&
        event.ownerUsername === user.username
    ) {
        return true;
    }


    return false;
}


function createEvent(eventData) {

    const user = getCurrentUser();


    if (
        user.role !== "student" &&
        user.role !== "admin"
    ) {

        return false;

    }


    const events = getEvents();


    const newEvent = {

        id: Date.now(),

        title: eventData.title,

        description: eventData.description,

        date: eventData.date,

        time: eventData.time,

        location: eventData.location,

        category: eventData.category,

        department: eventData.department,

        ownerUsername: user.username

    };


    events.push(newEvent);

    saveEvents(events);

    return newEvent;
}


function updateEvent(
    eventId,
    eventData
) {

    const user = getCurrentUser();

    const events = getEvents();


    const event = events.find(
        function (item) {

            return item.id === eventId;

        }
    );


    if (!event) {
        return false;
    }


    if (!canManageEvent(event, user)) {
        return false;
    }


    event.title = eventData.title;

    event.description = eventData.description;

    event.date = eventData.date;

    event.time = eventData.time;

    event.location = eventData.location;

    event.category = eventData.category;

    event.department = eventData.department;


    saveEvents(events);

    return true;
}


function deleteEvent(eventId) {

    const user = getCurrentUser();

    const events = getEvents();


    const event = events.find(
        function (item) {

            return item.id === eventId;

        }
    );


    if (!event) {
        return false;
    }


    if (!canManageEvent(event, user)) {

        return false;

    }


    const remainingEvents =
        events.filter(
            function (item) {

                return item.id !== eventId;

            }
        );


    saveEvents(remainingEvents);

    return true;
}