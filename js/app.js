let events = getEvents();

let currentUser = getCurrentUser();


$(document).ready(function () {

    populateFilters();

    displayEvents(events);

    $("#search, #category, #department, #date")
        .on("input change", filterEvents);

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
                    "Time: " +
                    event.time
                )
        );


        body.append(
            $("<p>")
                .addClass("event-meta")
                .text(
                    "Location: " +
                    event.location
                )
        );


        body.append(
            $("<p>")
                .addClass("event-meta")
                .text(
                    "Department: " +
                    event.department
                )
        );


        body.append(
            $("<a>")
                .addClass("event-link")
                .attr(
                    "href",
                    "pages/event.html?id=" +
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
        .fadeIn(300);

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