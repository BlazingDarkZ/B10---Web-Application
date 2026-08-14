function createRegistration(
    eventId,
    name,
    email
) {

    const user =
        getCurrentUser();


    if (user.role !== "student") {
        return false;
    }


    const registrations =
        getRegistrations();


    const alreadyRegistered =
        registrations.some(
            function (registration) {

                return (
                    registration.eventId === eventId &&
                    registration.username ===
                    user.username
                );

            }
        );


    if (alreadyRegistered) {
        return false;
    }


    registrations.push({

        id: Date.now(),

        eventId: eventId,

        username: user.username,

        name: name,

        email: email

    });


    saveRegistrations(
        registrations
    );


    return true;
}