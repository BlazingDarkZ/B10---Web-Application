function createRegistration(
    eventId,
    name,
    email
) {
    const user = getCurrentUser();

    if (user.role !== "student") {
        return false;
    }

    const registrations =
        getRegistrations();

    const alreadyRegistered =
        registrations.some(
            function (registration) {
                return (
                    String(registration.eventId) ===
                        String(eventId) &&
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
        eventId: Number(eventId),
        username: user.username,
        name: name,
        email: email
    });

    saveRegistrations(registrations);

    return true;
}

function getStudentRegistrations(username) {
    return getRegistrations().filter(
        function (registration) {
            return (
                registration.username === username
            );
        }
    );
}

function updateRegistration(
    registrationId,
    name,
    email
) {
    const user = getCurrentUser();
    const registrations =
        getRegistrations();

    const registration =
        registrations.find(
            function (item) {
                return (
                    String(item.id) ===
                    String(registrationId)
                );
            }
        );

    if (!registration) {
        return false;
    }

    if (
        registration.username !==
        user.username
    ) {
        return false;
    }

    registration.name = name;
    registration.email = email;

    saveRegistrations(registrations);

    return true;
}

function deleteRegistration(
    registrationId
) {
    const user = getCurrentUser();

    const registrations =
        getRegistrations();

    const registration =
        registrations.find(
            function (item) {
                return (
                    String(item.id) ===
                    String(registrationId)
                );
            }
        );

    if (!registration) {
        return false;
    }

    const allowed =
        user.role === "admin" ||
        registration.username ===
            user.username;

    if (!allowed) {
        return false;
    }

    const updated =
        registrations.filter(
            function (item) {
                return (
                    String(item.id) !==
                    String(registrationId)
                );
            }
        );

    saveRegistrations(updated);

    return true;
}