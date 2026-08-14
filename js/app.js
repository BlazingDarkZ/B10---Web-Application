let events = getEvents();

let registrations = getRegistrations();

let currentUser = getCurrentUser();


$(document).ready(function () {

    if ($("#eventsContainer").length) {

        populateFilters();

        displayEvents(events);

        $("#search, #category, #department, #date")
            .on(
                "input change",
                filterEvents
            );
    }

});


function populateFilters() {

    const categories = [
        ...new Set(
            events.map(function (event) {
                return event.category;
            })
        )
    ];


    const departments = [
        ...new Set(
            events.map(function (event) {
                return event.department;
            })
        )
    ];


    categories.forEach(function (category) {

        $("#category").append(
            $("<option>")
                .val(category)
                .text(category)
        );

    });


    departments.forEach(function (department) {

        $("#department").append(
            $("<option>")
                .val(department)
                .text(department)
        );

    });
}


function displayEvents(eventList) {

    const container =
        $("#eventsContainer");

    container.empty();


    $("#eventCount").text(
        eventList.length + " events"
    );


    if (eventList.length === 0) {

        container.append(
            $("<p>")
                .text(
                    "No events match your search."
                )
        );

        return;
    }


    eventList.forEach(function (event) {

        const date =
            new Date(event.date);


        const day =
            String(
                date.getDate()
            ).padStart(2, "0");


        const month =
            date.toLocaleDateString(
                "en-US",
                {
                    month: "short"
                }
            );


        const card =
            $("<article>")
                .addClass("event-card");


        const dateBox =
            $("<div>")
                .addClass("event-date");


        dateBox.append(
            $("<span>")
                .addClass("event-day")
                .text(day)
        );


        dateBox.append(
            $("<span>")
                .addClass("event-month")
                .text(month)
        );


        const body =
            $("<div>")
                .addClass("event-body");


        body.append(
            $("<span>")
                .addClass("event-category")
                .text(event.category)
        );


        body.append(
            $("<h3>")
                .text(event.title)
        );


        body.append(
            $("<p>")
                .addClass("event-description")
                .text(event.description)
        );


        body.append(
            $("<p>")
                .addClass("event-meta")
                .text(
                    event.time +
                    " · " +
                    event.location
                )
        );


        body.append(
            $("<p>")
                .addClass("event-meta")
                .text(
                    event.department
                )
        );


        body.append(
            $("<a>")
                .addClass("event-link")
                .attr(
                    "href",
                    "event.html?id=" +
                    event.id
                )
                .text("View Event")
        );


        card.append(
            dateBox,
            body
        );


        container.append(card);

    });


    container
        .hide()
        .fadeIn(250);
}


function filterEvents() {

    const search =
        $("#search")
            .val()
            .toLowerCase()
            .trim();


    const category =
        $("#category").val();


    const department =
        $("#department").val();


    const date =
        $("#date").val();


    const filteredEvents =
        events.filter(function (event) {

            const matchesSearch =
                event.title
                    .toLowerCase()
                    .includes(search) ||

                event.description
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =
                category === "" ||
                event.category === category;


            const matchesDepartment =
                department === "" ||
                event.department === department;


            const matchesDate =
                date === "" ||
                event.date === date;


            return (
                matchesSearch &&
                matchesCategory &&
                matchesDepartment &&
                matchesDate
            );

        });


    displayEvents(filteredEvents);
}


/* =========================
   EVENT CRUD
========================= */


function createEvent(eventData) {

    const newEvent = {

        id: Date.now(),

        title: eventData.title,

        description:
            eventData.description,

        date: eventData.date,

        time: eventData.time,

        location:
            eventData.location,

        category:
            eventData.category,

        department:
            eventData.department,

        organizerId:
            currentUser.id
    };


    events.push(newEvent);

    saveEvents(events);

    return newEvent;
}


function updateEvent(eventId, eventData) {

    const index =
        events.findIndex(function (event) {

            return event.id === eventId;

        });


    if (index === -1) {
        return false;
    }


    if (
        events[index].organizerId !==
        currentUser.id
    ) {
        return false;
    }


    events[index] = {

        ...events[index],

        title: eventData.title,

        description:
            eventData.description,

        date: eventData.date,

        time: eventData.time,

        location:
            eventData.location,

        category:
            eventData.category,

        department:
            eventData.department
    };


    saveEvents(events);

    return true;
}


function deleteEvent(eventId) {

    const event =
        events.find(function (item) {

            return item.id === eventId;

        });


    if (!event) {
        return false;
    }


    if (
        event.organizerId !==
        currentUser.id
    ) {
        return false;
    }


    events =
        events.filter(function (item) {

            return item.id !== eventId;

        });


    saveEvents(events);


    registrations =
        registrations.filter(function (item) {

            return item.eventId !== eventId;

        });


    saveRegistrations(registrations);


    return true;
}